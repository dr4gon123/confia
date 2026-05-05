# config firewall profile-protocol-options

Configure protocol options.

## Syntax

```
config firewall profile-protocol-options
    Description: Configure protocol options.
    edit <name>
        config cifs
            Description: Configure CIFS protocol options.
            set domain-controller {string}
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set ports {integer}
            set scan-bzip2 [enable|disable]
            set server-credential-type [none|credential-replication|...]
            config server-keytab
                Description: Server keytab.
                edit <principal>
                    set keytab {string}
                next
            end
            set status [enable|disable]
            set tcp-window-maximum {integer}
            set tcp-window-minimum {integer}
            set tcp-window-size {integer}
            set tcp-window-type [auto-tuning|system|...]
            set uncompressed-nest-limit {integer}
            set uncompressed-oversize-limit {integer}
        end
        set comment {var-string}
        config dns
            Description: Configure DNS protocol options.
            set ports {integer}
            set status [enable|disable]
        end
        config ftp
            Description: Configure FTP protocol options.
            set comfort-amount {integer}
            set comfort-interval {integer}
            set explicit-ftp-tls [enable|disable]
            set inspect-all [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set ports {integer}
            set scan-bzip2 [enable|disable]
            set ssl-offloaded [no|yes]
            set status [enable|disable]
            set stream-based-uncompressed-limit {integer}
            set tcp-window-maximum {integer}
            set tcp-window-minimum {integer}
            set tcp-window-size {integer}
            set tcp-window-type [auto-tuning|system|...]
            set uncompressed-nest-limit {integer}
            set uncompressed-oversize-limit {integer}
        end
        config http
            Description: Configure HTTP protocol options.
            set address-ip-rating [enable|disable]
            set block-page-status-code {integer}
            set comfort-amount {integer}
            set comfort-interval {integer}
            set domain-fronting [allow|block|...]
            set h2c [enable|disable]
            set inspect-all [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set ports {integer}
            set post-lang {option1}, {option2}, ...
            set proxy-after-tcp-handshake [enable|disable]
            set range-block [disable|enable]
            set retry-count {integer}
            set scan-bzip2 [enable|disable]
            set ssl-offloaded [no|yes]
            set status [enable|disable]
            set stream-based-uncompressed-limit {integer}
            set streaming-content-bypass [enable|disable]
            set strip-x-forwarded-for [disable|enable]
            set switching-protocols [bypass|block]
            set tcp-window-maximum {integer}
            set tcp-window-minimum {integer}
            set tcp-window-size {integer}
            set tcp-window-type [auto-tuning|system|...]
            set tunnel-non-http [enable|disable]
            set uncompressed-nest-limit {integer}
            set uncompressed-oversize-limit {integer}
            set unknown-content-encoding [block|inspect|...]
            set unknown-http-version [reject|tunnel|...]
            set verify-dns-for-policy-matching [enable|disable]
        end
        config imap
            Description: Configure IMAP protocol options.
            set inspect-all [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set ports {integer}
            set proxy-after-tcp-handshake [enable|disable]
            set scan-bzip2 [enable|disable]
            set ssl-offloaded [no|yes]
            set status [enable|disable]
            set uncompressed-nest-limit {integer}
            set uncompressed-oversize-limit {integer}
        end
        config mail-signature
            Description: Configure Mail signature.
            set signature {string}
            set status [disable|enable]
        end
        config mapi
            Description: Configure MAPI protocol options.
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set ports {integer}
            set scan-bzip2 [enable|disable]
            set status [enable|disable]
            set uncompressed-nest-limit {integer}
            set uncompressed-oversize-limit {integer}
        end
        config nntp
            Description: Configure NNTP protocol options.
            set inspect-all [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set ports {integer}
            set proxy-after-tcp-handshake [enable|disable]
            set scan-bzip2 [enable|disable]
            set status [enable|disable]
            set uncompressed-nest-limit {integer}
            set uncompressed-oversize-limit {integer}
        end
        set oversize-log [disable|enable]
        config pop3
            Description: Configure POP3 protocol options.
            set inspect-all [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set ports {integer}
            set proxy-after-tcp-handshake [enable|disable]
            set scan-bzip2 [enable|disable]
            set ssl-offloaded [no|yes]
            set status [enable|disable]
            set uncompressed-nest-limit {integer}
            set uncompressed-oversize-limit {integer}
        end
        set replacemsg-group {string}
        set rpc-over-http [enable|disable]
        config smtp
            Description: Configure SMTP protocol options.
            set inspect-all [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set ports {integer}
            set proxy-after-tcp-handshake [enable|disable]
            set scan-bzip2 [enable|disable]
            set server-busy [enable|disable]
            set ssl-offloaded [no|yes]
            set status [enable|disable]
            set uncompressed-nest-limit {integer}
            set uncompressed-oversize-limit {integer}
        end
        config ssh
            Description: Configure SFTP and SCP protocol options.
            set comfort-amount {integer}
            set comfort-interval {integer}
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set scan-bzip2 [enable|disable]
            set ssl-offloaded [no|yes]
            set stream-based-uncompressed-limit {integer}
            set tcp-window-maximum {integer}
            set tcp-window-minimum {integer}
            set tcp-window-size {integer}
            set tcp-window-type [auto-tuning|system|...]
            set uncompressed-nest-limit {integer}
            set uncompressed-oversize-limit {integer}
        end
        set switching-protocols-log [disable|enable]
    next
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| comment                 | Optional comments.                | var-string         | Maximum length:    |                    |
|                         |                                   |                    | 255                |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                    | Name.                             | string             | Maximum length: 35 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| oversize-log            | Enable/disable logging for        | option             | \-                 | disable            |
|                         | antivirus oversize file blocking. |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *disable*   | Disable logging for antivirus oversize file blocking.  |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *enable*    | Enable logging for antivirus oversize file blocking.   |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| replacemsg-group        | Name of the replacement message   | string             | Maximum length: 35 |                    |
|                         | group to be used.                 |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| rpc-over-http           | Enable/disable inspection of RPC  | option             | \-                 | disable            |
|                         | over HTTP.                        |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable inspection of RPC over HTTP.                    |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable inspection of RPC over HTTP.                   |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| switching-protocols-log | Enable/disable logging for        | option             | \-                 | disable            |
|                         | HTTP/HTTPS switching protocols.   |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *disable*   | Disable logging for HTTP/HTTPS switching protocols.    |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *enable*    | Enable logging for HTTP/HTTPS switching protocols.     |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+--------------------------------------------------------------------------------------------------+

