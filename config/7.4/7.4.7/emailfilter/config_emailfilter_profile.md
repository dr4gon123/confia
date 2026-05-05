# config emailfilter profile

Configure Email Filter profiles.

## Syntax

```
config emailfilter profile
    Description: Configure Email Filter profiles.
    edit <name>
        set comment {var-string}
        set external [enable|disable]
        set feature-set [flow|proxy]
        config gmail
            Description: Gmail.
            set log-all [disable|enable]
        end
        config imap
            Description: IMAP.
            set action [pass|tag]
            set log-all [disable|enable]
            set tag-msg {string}
            set tag-type {option1}, {option2}, ...
        end
        config mapi
            Description: MAPI.
            set action [pass|discard]
            set log-all [disable|enable]
        end
        config msn-hotmail
            Description: MSN Hotmail.
            set log-all [disable|enable]
        end
        set options {option1}, {option2}, ...
        config other-webmails
            Description: Other supported webmails.
            set log-all [disable|enable]
        end
        config pop3
            Description: POP3.
            set action [pass|tag]
            set log-all [disable|enable]
            set tag-msg {string}
            set tag-type {option1}, {option2}, ...
        end
        set replacemsg-group {string}
        config smtp
            Description: SMTP.
            set action [pass|tag|...]
            set hdrip [disable|enable]
            set local-override [disable|enable]
            set log-all [disable|enable]
            set tag-msg {string}
            set tag-type {option1}, {option2}, ...
        end
        set spam-bal-table {integer}
        set spam-bword-table {integer}
        set spam-bword-threshold {integer}
        set spam-filtering [enable|disable]
        set spam-iptrust-table {integer}
        set spam-log [disable|enable]
        set spam-log-fortiguard-response [disable|enable]
        set spam-mheader-table {integer}
        set spam-rbl-table {integer}
        config yahoo-mail
            Description: Yahoo! Mail.
            set log-all [disable|enable]
        end
    next
end
```

## Parameters

+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter                    | Description                       | Type                  | Size                  | Default               |
+==============================+===================================+=======================+=======================+=======================+
| comment                      | Comment.                          | var-string            | Maximum length: 255   |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| external                     | Enable/disable external Email     | option                | \-                    | disable               |
|                              | inspection.                       |                       |                       |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                              | +-------------+--------------------------------------------------------+                                  |
|                              | | Option      | Description                                            |                                  |
|                              | +=============+========================================================+                                  |
|                              | | *enable*    | Enable setting.                                        |                                  |
|                              | +-------------+--------------------------------------------------------+                                  |
|                              | | *disable*   | Disable setting.                                       |                                  |
|                              | +-------------+--------------------------------------------------------+                                  |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| feature-set                  | Flow/proxy feature set.           | option                | \-                    | flow                  |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                              | +-------------+--------------------------------------------------------+                                  |
|                              | | Option      | Description                                            |                                  |
|                              | +=============+========================================================+                                  |
|                              | | *flow*      | Flow feature set.                                      |                                  |
|                              | +-------------+--------------------------------------------------------+                                  |
|                              | | *proxy*     | Proxy feature set.                                     |                                  |
|                              | +-------------+--------------------------------------------------------+                                  |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| name                         | Profile name.                     | string                | Maximum length: 35    |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| options                      | Options.                          | option                | \-                    |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                              | +----------------+--------------------------------------------------------+                               |
|                              | | Option         | Description                                            |                               |
|                              | +================+========================================================+                               |
|                              | | *bannedword*   | Content block.                                         |                               |
|                              | +----------------+--------------------------------------------------------+                               |
|                              | | *spambal*      | Block/allow list.                                      |                               |
|                              | +----------------+--------------------------------------------------------+                               |
|                              | | *spamfsip*     | Email IP address FortiGuard AntiSpam block list check. |                               |
|                              | +----------------+--------------------------------------------------------+                               |
|                              | | *spamfssubmit* | Add FortiGuard AntiSpam spam submission text.          |                               |
|                              | +----------------+--------------------------------------------------------+                               |
|                              | | *spamfschksum* | Email checksum FortiGuard AntiSpam check.              |                               |
|                              | +----------------+--------------------------------------------------------+                               |
|                              | | *spamfsurl*    | Email content URL FortiGuard AntiSpam check.           |                               |
|                              | +----------------+--------------------------------------------------------+                               |
|                              | | *spamhelodns*  | Email helo/ehlo domain DNS check.                      |                               |
|                              | +----------------+--------------------------------------------------------+                               |
|                              | | *spamraddrdns* | Email return address DNS check.                        |                               |
|                              | +----------------+--------------------------------------------------------+                               |
|                              | | *spamrbl*      | Email DNSBL & ORBL check.                              |                               |
|                              | +----------------+--------------------------------------------------------+                               |
|                              | | *spamhdrcheck* | Email mime header check.                               |                               |
|                              | +----------------+--------------------------------------------------------+                               |
|                              | | *spamfsphish*  | Email content phishing URL FortiGuard AntiSpam check.  |                               |
|                              | +----------------+--------------------------------------------------------+                               |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| replacemsg-group             | Replacement message group.        | string                | Maximum length: 35    |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| spam-bal-table               | Anti-spam block/allow list table  | integer               | Minimum value: 0      | 0                     |
|                              | ID.                               |                       | Maximum value:        |                       |
|                              |                                   |                       | 4294967295            |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| spam-bword-table             | Anti-spam banned word table ID.   | integer               | Minimum value: 0      | 0                     |
|                              |                                   |                       | Maximum value:        |                       |
|                              |                                   |                       | 4294967295            |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| spam-bword-threshold         | Spam banned word threshold.       | integer               | Minimum value: 0      | 10                    |
|                              |                                   |                       | Maximum value:        |                       |
|                              |                                   |                       | 2147483647            |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| spam-filtering               | Enable/disable spam filtering.    | option                | \-                    | disable               |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                              | +-------------+--------------------------------------------------------+                                  |
|                              | | Option      | Description                                            |                                  |
|                              | +=============+========================================================+                                  |
|                              | | *enable*    | Enable setting.                                        |                                  |
|                              | +-------------+--------------------------------------------------------+                                  |
|                              | | *disable*   | Disable setting.                                       |                                  |
|                              | +-------------+--------------------------------------------------------+                                  |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| spam-iptrust-table           | Anti-spam IP trust table ID.      | integer               | Minimum value: 0      | 0                     |
|                              |                                   |                       | Maximum value:        |                       |
|                              |                                   |                       | 4294967295            |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| spam-log                     | Enable/disable spam logging for   | option                | \-                    | enable                |
|                              | email filtering.                  |                       |                       |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                              | +-------------+--------------------------------------------------------+                                  |
|                              | | Option      | Description                                            |                                  |
|                              | +=============+========================================================+                                  |
|                              | | *disable*   | Disable spam logging for email filtering.              |                                  |
|                              | +-------------+--------------------------------------------------------+                                  |
|                              | | *enable*    | Enable spam logging for email filtering.               |                                  |
|                              | +-------------+--------------------------------------------------------+                                  |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| spam-log-fortiguard-response | Enable/disable logging FortiGuard | option                | \-                    | disable               |
|                              | spam response.                    |                       |                       |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                              | +-------------+--------------------------------------------------------+                                  |
|                              | | Option      | Description                                            |                                  |
|                              | +=============+========================================================+                                  |
|                              | | *disable*   | Disable logging FortiGuard spam response.              |                                  |
|                              | +-------------+--------------------------------------------------------+                                  |
|                              | | *enable*    | Enable logging FortiGuard spam response.               |                                  |
|                              | +-------------+--------------------------------------------------------+                                  |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| spam-mheader-table           | Anti-spam MIME header table ID.   | integer               | Minimum value: 0      | 0                     |
|                              |                                   |                       | Maximum value:        |                       |
|                              |                                   |                       | 4294967295            |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| spam-rbl-table               | Anti-spam DNSBL table ID.         | integer               | Minimum value: 0      | 0                     |
|                              |                                   |                       | Maximum value:        |                       |
|                              |                                   |                       | 4294967295            |                       |
+------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+

