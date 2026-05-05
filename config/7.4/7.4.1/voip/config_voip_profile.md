# config voip profile

Configure VoIP profiles.

## Syntax

```
config voip profile
    Description: Configure VoIP profiles.
    edit <name>
        set comment {var-string}
        set feature-set [ips|voipd]
        config msrp
            Description: MSRP.
            set status [disable|enable]
            set log-violations [disable|enable]
            set max-msg-size {integer}
            set max-msg-size-action [pass|block|...]
        end
        config sccp
            Description: SCCP.
            set status [disable|enable]
            set block-mcast [disable|enable]
            set verify-header [disable|enable]
            set log-call-summary [disable|enable]
            set log-violations [disable|enable]
            set max-calls {integer}
        end
        config sip
            Description: SIP.
            set status [disable|enable]
            set rtp [disable|enable]
            set nat-port-range {user}
            set open-register-pinhole [disable|enable]
            set open-contact-pinhole [disable|enable]
            set strict-register [disable|enable]
            set register-rate {integer}
            set register-rate-track [none|src-ip|...]
            set invite-rate {integer}
            set invite-rate-track [none|src-ip|...]
            set max-dialogs {integer}
            set max-line-length {integer}
            set block-long-lines [disable|enable]
            set block-unknown [disable|enable]
            set call-keepalive {integer}
            set block-ack [disable|enable]
            set block-bye [disable|enable]
            set block-cancel [disable|enable]
            set block-info [disable|enable]
            set block-invite [disable|enable]
            set block-message [disable|enable]
            set block-notify [disable|enable]
            set block-options [disable|enable]
            set block-prack [disable|enable]
            set block-publish [disable|enable]
            set block-refer [disable|enable]
            set block-register [disable|enable]
            set block-subscribe [disable|enable]
            set block-update [disable|enable]
            set register-contact-trace [disable|enable]
            set open-via-pinhole [disable|enable]
            set open-record-route-pinhole [disable|enable]
            set rfc2543-branch [disable|enable]
            set log-violations [disable|enable]
            set log-call-summary [disable|enable]
            set nat-trace [disable|enable]
            set subscribe-rate {integer}
            set subscribe-rate-track [none|src-ip|...]
            set message-rate {integer}
            set message-rate-track [none|src-ip|...]
            set notify-rate {integer}
            set notify-rate-track [none|src-ip|...]
            set refer-rate {integer}
            set refer-rate-track [none|src-ip|...]
            set update-rate {integer}
            set update-rate-track [none|src-ip|...]
            set options-rate {integer}
            set options-rate-track [none|src-ip|...]
            set ack-rate {integer}
            set ack-rate-track [none|src-ip|...]
            set prack-rate {integer}
            set prack-rate-track [none|src-ip|...]
            set info-rate {integer}
            set info-rate-track [none|src-ip|...]
            set publish-rate {integer}
            set publish-rate-track [none|src-ip|...]
            set bye-rate {integer}
            set bye-rate-track [none|src-ip|...]
            set cancel-rate {integer}
            set cancel-rate-track [none|src-ip|...]
            set preserve-override [disable|enable]
            set no-sdp-fixup [disable|enable]
            set contact-fixup [disable|enable]
            set max-idle-dialogs {integer}
            set block-geo-red-options [disable|enable]
            set hosted-nat-traversal [disable|enable]
            set hnt-restrict-source-ip [disable|enable]
            set call-id-regex {var-string}
            set content-type-regex {var-string}
            set max-body-length {integer}
            set unknown-header [discard|pass|...]
            set malformed-request-line [discard|pass|...]
            set malformed-header-via [discard|pass|...]
            set malformed-header-from [discard|pass|...]
            set malformed-header-to [discard|pass|...]
            set malformed-header-call-id [discard|pass|...]
            set malformed-header-cseq [discard|pass|...]
            set malformed-header-rack [discard|pass|...]
            set malformed-header-rseq [discard|pass|...]
            set malformed-header-contact [discard|pass|...]
            set malformed-header-record-route [discard|pass|...]
            set malformed-header-route [discard|pass|...]
            set malformed-header-expires [discard|pass|...]
            set malformed-header-content-type [discard|pass|...]
            set malformed-header-content-length [discard|pass|...]
            set malformed-header-max-forwards [discard|pass|...]
            set malformed-header-allow [discard|pass|...]
            set malformed-header-p-asserted-identity [discard|pass|...]
            set malformed-header-no-require [discard|pass|...]
            set malformed-header-no-proxy-require [discard|pass|...]
            set malformed-header-sdp-v [discard|pass|...]
            set malformed-header-sdp-o [discard|pass|...]
            set malformed-header-sdp-s [discard|pass|...]
            set malformed-header-sdp-i [discard|pass|...]
            set malformed-header-sdp-c [discard|pass|...]
            set malformed-header-sdp-b [discard|pass|...]
            set malformed-header-sdp-z [discard|pass|...]
            set malformed-header-sdp-k [discard|pass|...]
            set malformed-header-sdp-a [discard|pass|...]
            set malformed-header-sdp-t [discard|pass|...]
            set malformed-header-sdp-r [discard|pass|...]
            set malformed-header-sdp-m [discard|pass|...]
            set provisional-invite-expiry-time {integer}
            set ips-rtp [disable|enable]
            set ssl-mode [off|full]
            set ssl-send-empty-frags [enable|disable]
            set ssl-client-renegotiation [allow|deny|...]
            set ssl-algorithm [high|medium|...]
            set ssl-pfs [require|deny|...]
            set ssl-min-version [ssl-3.0|tls-1.0|...]
            set ssl-max-version [ssl-3.0|tls-1.0|...]
            set ssl-client-certificate {string}
            set ssl-server-certificate {string}
            set ssl-auth-client {string}
            set ssl-auth-server {string}
        end
    next
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                       | Type               | Size               | Default            |
+=============+===================================+====================+====================+====================+
| comment     | Comment.                          | var-string         | Maximum length:    |                    |
|             |                                   |                    | 255                |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| feature-set | IPS or voipd (SIP-ALG) inspection | option             | \-                 | voipd              |
|             | feature set.                      |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *ips*       | IPS Engine feature set for ips-voip-filter.            |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *voipd*     | SIP ALG feature set for voip-profile.                  |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| name        | Profile name.                     | string             | Maximum length: 35 |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+

