# config antivirus profile

Configure AntiVirus profiles.

## Syntax

```
config antivirus profile
    Description: Configure AntiVirus profiles.
    edit <name>
        set analytics-accept-filetype {integer}
        set analytics-db [disable|enable]
        set analytics-ignore-filetype {integer}
        set av-virus-log [enable|disable]
        config cifs
            Description: Configure CIFS AntiVirus options.
            set archive-block {option1}, {option2}, ...
            set archive-log {option1}, {option2}, ...
            set av-scan [disable|block|...]
            set emulator [enable|disable]
            set external-blocklist [disable|block|...]
            set fortindr [disable|block|...]
            set fortisandbox [disable|block|...]
            set malware-stream [disable|block|...]
            set outbreak-prevention [disable|block|...]
            set quarantine [disable|enable]
        end
        set comment {var-string}
        config content-disarm
            Description: AV Content Disarm and Reconstruction settings.
            set analytics-suspicious [disable|enable]
            set cover-page [disable|enable]
            set detect-only [disable|enable]
            set error-action [block|log-only|...]
            set office-action [disable|enable]
            set office-dde [disable|enable]
            set office-embed [disable|enable]
            set office-hylink [disable|enable]
            set office-linked [disable|enable]
            set office-macro [disable|enable]
            set original-file-destination [fortisandbox|quarantine|...]
            set pdf-act-form [disable|enable]
            set pdf-act-gotor [disable|enable]
            set pdf-act-java [disable|enable]
            set pdf-act-launch [disable|enable]
            set pdf-act-movie [disable|enable]
            set pdf-act-sound [disable|enable]
            set pdf-embedfile [disable|enable]
            set pdf-hyperlink [disable|enable]
            set pdf-javacode [disable|enable]
        end
        set ems-threat-feed [disable|enable]
        set extended-log [enable|disable]
        set external-blocklist <name1>, <name2>, ...
        set external-blocklist-enable-all [disable|enable]
        set feature-set [flow|proxy]
        set fortindr-error-action [log-only|block|...]
        set fortindr-timeout-action [log-only|block|...]
        set fortisandbox-error-action [log-only|block|...]
        set fortisandbox-max-upload {integer}
        set fortisandbox-mode [inline|analytics-suspicious|...]
        set fortisandbox-scan-timeout {integer}
        set fortisandbox-timeout-action [log-only|block|...]
        config ftp
            Description: Configure FTP AntiVirus options.
            set archive-block {option1}, {option2}, ...
            set archive-log {option1}, {option2}, ...
            set av-scan [disable|block|...]
            set emulator [enable|disable]
            set external-blocklist [disable|block|...]
            set fortindr [disable|block|...]
            set fortisandbox [disable|block|...]
            set malware-stream [disable|block|...]
            set outbreak-prevention [disable|block|...]
            set quarantine [disable|enable]
        end
        config http
            Description: Configure HTTP AntiVirus options.
            set archive-block {option1}, {option2}, ...
            set archive-log {option1}, {option2}, ...
            set av-scan [disable|block|...]
            set content-disarm [disable|enable]
            set emulator [enable|disable]
            set external-blocklist [disable|block|...]
            set fortindr [disable|block|...]
            set fortisandbox [disable|block|...]
            set malware-stream [disable|block|...]
            set outbreak-prevention [disable|block|...]
            set quarantine [disable|enable]
        end
        config imap
            Description: Configure IMAP AntiVirus options.
            set archive-block {option1}, {option2}, ...
            set archive-log {option1}, {option2}, ...
            set av-scan [disable|block|...]
            set content-disarm [disable|enable]
            set emulator [enable|disable]
            set executables [default|virus]
            set external-blocklist [disable|block|...]
            set fortindr [disable|block|...]
            set fortisandbox [disable|block|...]
            set malware-stream [disable|block|...]
            set outbreak-prevention [disable|block|...]
            set quarantine [disable|enable]
        end
        config mapi
            Description: Configure MAPI AntiVirus options.
            set archive-block {option1}, {option2}, ...
            set archive-log {option1}, {option2}, ...
            set av-scan [disable|block|...]
            set emulator [enable|disable]
            set executables [default|virus]
            set external-blocklist [disable|block|...]
            set fortindr [disable|block|...]
            set fortisandbox [disable|block|...]
            set malware-stream [disable|block|...]
            set outbreak-prevention [disable|block|...]
            set quarantine [disable|enable]
        end
        set mobile-malware-db [disable|enable]
        config nac-quar
            Description: Configure AntiVirus quarantine settings.
            set expiry {user}
            set infected [none|quar-src-ip]
            set log [enable|disable]
        end
        config nntp
            Description: Configure NNTP AntiVirus options.
            set archive-block {option1}, {option2}, ...
            set archive-log {option1}, {option2}, ...
            set av-scan [disable|block|...]
            set emulator [enable|disable]
            set external-blocklist [disable|block|...]
            set fortindr [disable|block|...]
            set fortisandbox [disable|block|...]
            set malware-stream [disable|block|...]
            set outbreak-prevention [disable|block|...]
            set quarantine [disable|enable]
        end
        set outbreak-prevention-archive-scan [disable|enable]
        config pop3
            Description: Configure POP3 AntiVirus options.
            set archive-block {option1}, {option2}, ...
            set archive-log {option1}, {option2}, ...
            set av-scan [disable|block|...]
            set content-disarm [disable|enable]
            set emulator [enable|disable]
            set executables [default|virus]
            set external-blocklist [disable|block|...]
            set fortindr [disable|block|...]
            set fortisandbox [disable|block|...]
            set malware-stream [disable|block|...]
            set outbreak-prevention [disable|block|...]
            set quarantine [disable|enable]
        end
        set replacemsg-group {string}
        set scan-mode [default|legacy]
        config smtp
            Description: Configure SMTP AntiVirus options.
            set archive-block {option1}, {option2}, ...
            set archive-log {option1}, {option2}, ...
            set av-scan [disable|block|...]
            set content-disarm [disable|enable]
            set emulator [enable|disable]
            set executables [default|virus]
            set external-blocklist [disable|block|...]
            set fortindr [disable|block|...]
            set fortisandbox [disable|block|...]
            set malware-stream [disable|block|...]
            set outbreak-prevention [disable|block|...]
            set quarantine [disable|enable]
        end
        config ssh
            Description: Configure SFTP and SCP AntiVirus options.
            set archive-block {option1}, {option2}, ...
            set archive-log {option1}, {option2}, ...
            set av-scan [disable|block|...]
            set emulator [enable|disable]
            set external-blocklist [disable|block|...]
            set fortindr [disable|block|...]
            set fortisandbox [disable|block|...]
            set malware-stream [disable|block|...]
            set outbreak-prevention [disable|block|...]
            set quarantine [disable|enable]
        end
    next
end
```

## Parameters

+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| Parameter                        | Description                       | Type                    | Size                    | Default                 |
+==================================+===================================+=========================+=========================+=========================+
| analytics-accept-filetype        | Only submit files matching this   | integer                 | Minimum value: 0        | 0                       |
|                                  | DLP file-pattern to FortiSandbox  |                         | Maximum value:          |                         |
|                                  | (post-transfer scan only).        |                         | 4294967295              |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| analytics-db                     | Enable/disable using the          | option                  | \-                      | disable                 |
|                                  | FortiSandbox signature database   |                         |                         |                         |
|                                  | to supplement the AV signature    |                         |                         |                         |
|                                  | databases.                        |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *disable*   | Use only the standard AV signature databases.          |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *enable*    | Also use the FortiSandbox signature database.          |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| analytics-ignore-filetype        | Do not submit files matching this | integer                 | Minimum value: 0        | 0                       |
|                                  | DLP file-pattern to FortiSandbox  |                         | Maximum value:          |                         |
|                                  | (post-transfer scan only).        |                         | 4294967295              |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| av-virus-log                     | Enable/disable AntiVirus logging. | option                  | \-                      | enable                  |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *enable*    | Enable setting.                                        |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *disable*   | Disable setting.                                       |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| comment                          | Comment.                          | var-string              | Maximum length: 255     |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ems-threat-feed                  | Enable/disable use of EMS threat  | option                  | \-                      | disable                 |
|                                  | feed when performing AntiVirus    |                         |                         |                         |
|                                  | scan. Analyzes files including    |                         |                         |                         |
|                                  | the content of archives.          |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *disable*   | Disable use of EMS threat feed when performing         |                                        |
|                                  | |             | AntiVirus scan.                                        |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *enable*    | Enable use of EMS threat feed when performing          |                                        |
|                                  | |             | AntiVirus scan.                                        |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| extended-log                     | Enable/disable extended logging   | option                  | \-                      | disable                 |
|                                  | for antivirus.                    |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *enable*    | Enable setting.                                        |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *disable*   | Disable setting.                                       |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| external-blocklist `<name>`      | One or more external malware      | string                  | Maximum length: 79      |                         |
|                                  | block lists.                      |                         |                         |                         |
|                                  |                                   |                         |                         |                         |
|                                  | External blocklist.               |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| external-blocklist-enable-all    | Enable/disable all external       | option                  | \-                      | disable                 |
|                                  | blocklists.                       |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *disable*   | Use configured external blocklists.                    |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *enable*    | Enable all external blocklists.                        |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| feature-set                      | Flow/proxy feature set.           | option                  | \-                      | flow                    |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *flow*      | Flow feature set.                                      |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *proxy*     | Proxy feature set.                                     |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fortindr-error-action \*         | Action to take if FortiNDR        | option                  | \-                      | log-only                |
|                                  | encounters an error.              |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *log-only*  | Log FortiNDR error, but allow the file.                |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *block*     | Block the file on FortiNDR error.                      |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *ignore*    | Do nothing on FortiNDR error.                          |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fortindr-timeout-action \*       | Action to take if FortiNDR        | option                  | \-                      | log-only                |
|                                  | encounters a scan timeout.        |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *log-only*  | Log FortiNDR scan timeout, but allow the file.         |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *block*     | Block the file on FortiNDR scan timeout.               |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *ignore*    | Do nothing on FortiNDR scan timeout.                   |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fortisandbox-error-action \*     | Action to take if FortiSandbox    | option                  | \-                      | log-only                |
|                                  | inline scan encounters an error.  |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *log-only*  | Log FortiSandbox inline scan error, but allow the      |                                        |
|                                  | |             | file.                                                  |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *block*     | Block the file on FortiSandbox inline scan error.      |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *ignore*    | Do nothing on FortiSandbox inline scan error.          |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fortisandbox-max-upload          | Maximum size of files that can be | integer                 | Minimum value: 1        | 10                      |
|                                  | uploaded to FortiSandbox in       |                         | Maximum value: 1606     |                         |
|                                  | Mbytes.                           |                         | \*\*                    |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fortisandbox-mode                | FortiSandbox scan modes.          | option                  | \-                      | analytics-everything    |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +------------------------+--------------------------------------------------------+                             |
|                                  | | Option                 | Description                                            |                             |
|                                  | +========================+========================================================+                             |
|                                  | | *inline*               | FortiSandbox inline scan.                              |                             |
|                                  | +------------------------+--------------------------------------------------------+                             |
|                                  | | *analytics-suspicious* | FortiSandbox post-transfer scan: submit supported      |                             |
|                                  | |                        | files if heuristics or other methods determine they    |                             |
|                                  | |                        | are suspicious.                                        |                             |
|                                  | +------------------------+--------------------------------------------------------+                             |
|                                  | | *analytics-everything* | FortiSandbox post-transfer scan: submit supported      |                             |
|                                  | |                        | files for inspection.                                  |                             |
|                                  | +------------------------+--------------------------------------------------------+                             |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fortisandbox-scan-timeout \*     | FortiSandbox inline scan timeout  | integer                 | Minimum value: 30       | 60                      |
|                                  | in seconds (30 - 180, default =   |                         | Maximum value: 180      |                         |
|                                  | 60).                              |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fortisandbox-timeout-action \*   | Action to take if FortiSandbox    | option                  | \-                      | log-only                |
|                                  | inline scan encounters a scan     |                         |                         |                         |
|                                  | timeout.                          |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *log-only*  | Log FortiSandbox inline scan timeout, but allow the    |                                        |
|                                  | |             | file.                                                  |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *block*     | Block the file on FortiSandbox inline scan timeout.    |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *ignore*    | Do nothing on FortiSandbox inline scan timeout.        |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mobile-malware-db                | Enable/disable using the mobile   | option                  | \-                      | enable                  |
|                                  | malware signature database.       |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *disable*   | Do not use the mobile malware signature database.      |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *enable*    | Also use the mobile malware signature database.        |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| name                             | Profile name.                     | string                  | Maximum length: 47      |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| outbreak-prevention-archive-scan | Enable/disable                    | option                  | \-                      | enable                  |
|                                  | outbreak-prevention archive       |                         |                         |                         |
|                                  | scanning.                         |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *disable*   | Analyze files as sent, not the content of archives.    |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *enable*    | Analyze files including the content of archives.       |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| replacemsg-group                 | Replacement message group         | string                  | Maximum length: 35      |                         |
|                                  | customized for this profile.      |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| scan-mode                        | Configure scan mode (default or   | option                  | \-                      | default                 |
|                                  | legacy).                          |                         |                         |                         |
+----------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | Option      | Description                                            |                                        |
|                                  | +=============+========================================================+                                        |
|                                  | | *default*   | On the fly decompression and scanning of certain       |                                        |
|                                  | |             | archive files.                                         |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
|                                  | | *legacy*    | Scan archive files only after the entire file is       |                                        |
|                                  | |             | received.                                              |                                        |
|                                  | +-------------+--------------------------------------------------------+                                        |
+----------------------------------+-----------------------------------------------------------------------------------------------------------------+

