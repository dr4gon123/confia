# config firewall profile-protocol-options

Configure protocol options.

## Syntax

```
config firewall profile-protocol-options
    Description: Configure protocol options.
    edit <name>
        config cifs
            Description: Configure CIFS protocol options.
            set ports {integer}
            set status [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set uncompressed-oversize-limit {integer}
            set uncompressed-nest-limit {integer}
            set scan-bzip2 [enable|disable]
            set tcp-window-type [auto-tuning|system|...]
            set tcp-window-minimum {integer}
            set tcp-window-maximum {integer}
            set tcp-window-size {integer}
            set server-credential-type [none|credential-replication|...]
            set domain-controller {string}
            config server-keytab
                Description: Server keytab.
                edit <principal>
                    set keytab {string}
                next
            end
        end
        set comment {var-string}
        config dns
            Description: Configure DNS protocol options.
            set ports {integer}
            set status [enable|disable]
        end
        config ftp
            Description: Configure FTP protocol options.
            set ports {integer}
            set status [enable|disable]
            set inspect-all [enable|disable]
            set options {option1}, {option2}, ...
            set comfort-interval {integer}
            set comfort-amount {integer}
            set oversize-limit {integer}
            set uncompressed-oversize-limit {integer}
            set uncompressed-nest-limit {integer}
            set stream-based-uncompressed-limit {integer}
            set scan-bzip2 [enable|disable]
            set tcp-window-type [auto-tuning|system|...]
            set tcp-window-minimum {integer}
            set tcp-window-maximum {integer}
            set tcp-window-size {integer}
            set ssl-offloaded [no|yes]
            set explicit-ftp-tls [enable|disable]
        end
        config http
            Description: Configure HTTP protocol options.
            set ports {integer}
            set status [enable|disable]
            set inspect-all [enable|disable]
            set proxy-after-tcp-handshake [enable|disable]
            set options {option1}, {option2}, ...
            set comfort-interval {integer}
            set comfort-amount {integer}
            set range-block [disable|enable]
            set strip-x-forwarded-for [disable|enable]
            set post-lang {option1}, {option2}, ...
            set streaming-content-bypass [enable|disable]
            set switching-protocols [bypass|block]
            set unknown-http-version [reject|tunnel|...]
            set tunnel-non-http [enable|disable]
            set h2c [enable|disable]
            set unknown-content-encoding [block|inspect|...]
            set oversize-limit {integer}
            set uncompressed-oversize-limit {integer}
            set uncompressed-nest-limit {integer}
            set stream-based-uncompressed-limit {integer}
            set scan-bzip2 [enable|disable]
            set verify-dns-for-policy-matching [enable|disable]
            set block-page-status-code {integer}
            set retry-count {integer}
            set tcp-window-type [auto-tuning|system|...]
            set tcp-window-minimum {integer}
            set tcp-window-maximum {integer}
            set tcp-window-size {integer}
            set ssl-offloaded [no|yes]
            set address-ip-rating [enable|disable]
        end
        config imap
            Description: Configure IMAP protocol options.
            set ports {integer}
            set status [enable|disable]
            set inspect-all [enable|disable]
            set proxy-after-tcp-handshake [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set uncompressed-oversize-limit {integer}
            set uncompressed-nest-limit {integer}
            set scan-bzip2 [enable|disable]
            set ssl-offloaded [no|yes]
        end
        config mail-signature
            Description: Configure Mail signature.
            set status [disable|enable]
            set signature {string}
        end
        config mapi
            Description: Configure MAPI protocol options.
            set ports {integer}
            set status [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set uncompressed-oversize-limit {integer}
            set uncompressed-nest-limit {integer}
            set scan-bzip2 [enable|disable]
        end
        config nntp
            Description: Configure NNTP protocol options.
            set ports {integer}
            set status [enable|disable]
            set inspect-all [enable|disable]
            set proxy-after-tcp-handshake [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set uncompressed-oversize-limit {integer}
            set uncompressed-nest-limit {integer}
            set scan-bzip2 [enable|disable]
        end
        set oversize-log [disable|enable]
        config pop3
            Description: Configure POP3 protocol options.
            set ports {integer}
            set status [enable|disable]
            set inspect-all [enable|disable]
            set proxy-after-tcp-handshake [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set uncompressed-oversize-limit {integer}
            set uncompressed-nest-limit {integer}
            set scan-bzip2 [enable|disable]
            set ssl-offloaded [no|yes]
        end
        set replacemsg-group {string}
        set rpc-over-http [enable|disable]
        config smtp
            Description: Configure SMTP protocol options.
            set ports {integer}
            set status [enable|disable]
            set inspect-all [enable|disable]
            set proxy-after-tcp-handshake [enable|disable]
            set options {option1}, {option2}, ...
            set oversize-limit {integer}
            set uncompressed-oversize-limit {integer}
            set uncompressed-nest-limit {integer}
            set scan-bzip2 [enable|disable]
            set server-busy [enable|disable]
            set ssl-offloaded [no|yes]
        end
        config ssh
            Description: Configure SFTP and SCP protocol options.
            set options {option1}, {option2}, ...
            set comfort-interval {integer}
            set comfort-amount {integer}
            set oversize-limit {integer}
            set uncompressed-oversize-limit {integer}
            set uncompressed-nest-limit {integer}
            set stream-based-uncompressed-limit {integer}
            set scan-bzip2 [enable|disable]
            set tcp-window-type [auto-tuning|system|...]
            set tcp-window-minimum {integer}
            set tcp-window-maximum {integer}
            set tcp-window-size {integer}
            set ssl-offloaded [no|yes]
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

