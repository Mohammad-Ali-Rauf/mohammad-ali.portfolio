export const reports = [
	{
		id: 'initial-access',
		title: 'Phishing Initial Access | Internal Red Team Exercise',
		skills: ['Phishing', 'C2', 'BloodHound', 'Kerberoasting'],
		content: `
**Overview:**
Simulated a real-world phishing campaign targeting internal staff. Payload was delivered via a macro-embedded Excel doc. Once a user clicked, our custom PowerShell stager deployed.

**Access Gained:**
- Foothold achieved on domain-joined workstation
- Lateral movement via SMB relay
- BloodHound used to identify high-value targets

**Privilege Escalation:**
- Kerberoasting with Impacket
- Extracted TGS tickets
- Cracked passwords offline

**Outcome:**
- Full domain compromise
- Data exfiltrated to local C2
		`,
	},
	{
		id: 'priv-esc-lsass',
		title: 'Privilege Escalation & Data Exfiltration',
		skills: ['WinPEAS', 'LSASS Dump', 'Impacket'],
		content: `
**Initial Access:**
Assumed compromise of low-priv domain user. Leveraged existing access to elevate privileges and move to high-value systems.

**Techniques Used:**
- Enumerated misconfigs using WinPEAS
- Leveraged SeImpersonatePrivilege with Juicy Potato
- Dumped LSASS using ProcDump

**Data Exfil:**
- File compression with 7zip
- Transferred via HTTPS to external box
- Left minimal forensic footprint

**Impact:**
Gained access to sensitive PII, finance records, and AD secrets. Achieved persistence using scheduled tasks and registry hijack.
		`,
	},
];