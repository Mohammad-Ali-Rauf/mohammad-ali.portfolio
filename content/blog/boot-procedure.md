---
title: "Today I Learned: The Boot Procedure from Firmware to Shell"
date: 2026-03-24
draft: false
tags: ["boot", "uefi", "grub", "linux", "learning-in-public"]
---

I've been running Linux for years. `sudo reboot` and watch the magic happen.

But I never actually knew what was happening between the power button and the login prompt.

Today I watched a course by Sander van Vugt on LinkedIn Learning, and finally connected the dots. Here's what I learned.

---

## The High-Level Flow

```
Firmware → Disk → Bootloader → Kernel → initramfs → systemd → Services → Shell
```

Simple, right? But each step has more detail than I expected.

---

## Step 1: Firmware

When you press the power button, the firmware (BIOS or UEFI) initializes hardware and decides where to boot from.

**Old way (BIOS/MBR):**
- BIOS loads the Master Boot Record (first 512 bytes of disk)
- MBR contains stage 1 of GRUB
- GRUB takes over from there

**New way (UEFI/GPT):**
- UEFI firmware reads the GUID Partition Table
- It looks for an **EFI System Partition** (ESP)
- This partition contains bootloaders (like `grubx64.efi`)

This is why UEFI + GPT is more capable. UEFI bypasses the legacy MBR dance, and GPT supports disks > 2TB. UEFI also supports something called *Secure Boot*, unlike BIOS.

---

## Step 2: GRUB (Grand Unified Bootloader)

GRUB has one job: find and load the kernel.

It gives you that menu where you can:
- Choose which OS to boot
- Edit kernel parameters
- Boot into recovery mode

Under the hood, GRUB knows how to:
- Read filesystems (ext4, btrfs, xfs)
- Find `vmlinuz-*` (the kernel)
- Find `initramfs-*` (initial RAM filesystem)

---

## Step 3: Kernel

Once GRUB loads the kernel into memory, the kernel:
- Initializes CPU, memory, devices
- Mounts the initial RAM filesystem (`initramfs`)
- Hands over control

This is where the magic starts — the kernel is now the boss.

---

## Step 4: initramfs (Initial RAM Filesystem)

I always wondered what `initramfs` was for. Now I get it:

`initramfs` is a tiny root filesystem loaded into RAM that contains:
- Essential kernel modules (especially disk drivers)
- Simple scripts to find the real root filesystem

**Why?** If your kernel needs drivers to read your disk (NVMe, LVM, encryption), but those drivers live *on* the disk — chicken and egg problem.

`initramfs` solves this by providing just enough to:
1. Load the right drivers
2. Locate the real root partition
3. Mount it
4. Pass control

---

## Step 5: systemd

Once the real root is mounted, `init` (usually systemd these days) takes over.

systemd:
- Starts all system services
- Manages dependencies (network needs to be up before web server)
- Handles sockets, timers, mounts

It's the first process (PID 1) and the parent of everything else.

---

## Step 6: Services

After systemd starts, it activates:
- Display managers (if you have a GUI)
- Network services
- SSH daemon
- Your database, web server, etc.

This is where "Linux is running" becomes "Linux is doing useful things."

---

## Step 7: Shell

Finally — the shell.

Whether it's:
- `getty` on tty1-6
- A terminal emulator in GNOME
- SSH session

You get your prompt. The boot process is complete.

---

## What I Still Don't Understand

- **How does UEFI actually locate the ESP?** Is it hardcoded? Does it scan?
- **When we use UEFI but disable *Secure Boot*, can we still call UEFI more 'secure' than BIOS?**
- **What exactly happens in the kernel between initramfs and mounting root?**
- **How does systemd know what order to start services?**

More to learn. But today, this feels good.

---

## Why This Matters

I'm not writing this to be an expert. I'm writing this to:

1. **Solidify what I learned** — teaching helps retention
2. **Get corrected** — If there is a misconception, correct me
3. **Help someone else** who's equally confused

If you see something wrong, [Tell me](/contact). I'm here to learn.