+++
title = "Debugging a NULL Pointer Dereference in a Custom Kernel Module"
date = 2026-03-08
tags = ["kernel", "debugging", "linux", "beginner"]
+++

I triggered a kernel panic while testing a simple character driver. The oops message said "NULL pointer dereference at 0x00000008". Here's how I traced it from panic to patch — without guessing.

<!-- more -->

### The Oops

```text
[  142.384921] BUG: unable to handle kernel NULL pointer dereference at 0000000000000008
[  142.385012] IP: [<ffffffffc0a01042>] my_ioctl+0x42/0x100 [my_driver]
[  142.385089] CR2: 0000000000000008
```

---

### What I Did Wrong

In my `ioctl` handler, I copied data from userspace without validating the pointer first:
```c
static long my_ioctl(struct file *filp, unsigned int cmd, unsigned long arg)
{
    struct my_data *buf;
    
    // ❌ No NULL check on arg
    copy_from_user(buf, (void __user *)arg, sizeof(*buf));
    
    buf->value = 42;  // 💥 CR2 = 0x8 → buf->value is at offset 0x8
    return 0;
}
```

---

### How I Debugged It

1. **Reproduced in QEMU**: `qemu-system-x86_64 -kernel bzImage -append "panic_on_oops=1"`
2. **Attached GDB**: `target remote :1234` + `bt full` to see the tainted frame
3. **Checked registers**: `info registers` → `CR2 = 0x8` confirmed NULL deref at offset 8
4. **Added the obvious fix**:
```c
if (!arg)
    return -EINVAL;
copy_from_user(buf, (void __user *)arg, sizeof(*buf));
```

---

### What I Learned

- `CR2` holds the faulting address — always check it first
- Offset `0x8` in the oops → field position in the struct
- Never trust userspace pointers. Ever.

---

### Next Steps

- Add `__user` annotations consistently
- Write a test harness that fuzzes `ioctl` args
- Explore `KASAN` to catch this class of bugs earlier

> This was my first real kernel panic debug. I'm still learning. If you spot a mistake in my reasoning, email me — I'd rather fix my understanding than ship wrong assumptions.

[Back to Blog](/)