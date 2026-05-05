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
            set log-violations [disable|enable]
            set max-msg-size {integer}
            set max-msg-size-action [pass|block|...]
            set status [disable|enable]
        end
        config sccp
            Description: SCCP.
            set block-mcast [disable|enable]
            set log-call-summary [disable|enable]
            set log-violations [disable|enable]
            set max-calls {integer}
            set status [disable|enable]
            set verify-header [disable|enable]
        end
        config sip
            Description: SIP.
            set ack-rate {integer}
            set ack-rate-track [none|src-ip|...]
            set block-ack [disable|enable]
            set block-bye [disable|enable]
            set block-cancel [disable|enable]
            set block-geo-red-options [disable|enable]
            set block-info [disable|enable]
            set block-invite [disable|enable]
            set block-long-lines [disable|enable]
            set block-message [disable|enable]
            set block-notify [disable|enable]
            set block-options [disable|enable]
            set block-prack [disable|enable]
            set block-publish [disable|enable]
            set block-refer [disable|enable]
            set block-register [disable|enable]
            set block-subscribe [disable|enable]
            set block-unknown [disable|enable]
            set block-update [disable|enable]
            set bye-rate {integer}
            set bye-rate-track [none|src-ip|...]
            set call-id-regex {var-string}
            set call-keepalive {integer}
            set cancel-rate {integer}
            set cancel-rate-track [none|src-ip|...]
            set contact-fixup [disable|enable]
            set content-type-regex {var-string}
            set hnt-restrict-source-ip [disable|enable]
            set hosted-nat-traversal [disable|enable]
            set info-rate {integer}
            set info-rate-track [none|src-ip|...]
            set invite-rate {integer}
            set invite-rate-track [none|src-ip|...]
            set ips-rtp [disable|enable]
            set log-call-summary [disable|enable]
            set log-violations [disable|enable]
            set malformed-header-allow [discard|pass|...]
            set malformed-header-call-id [discard|pass|...]
            set malformed-header-contact [discard|pass|...]
            set malformed-header-content-length [discard|pass|...]
            set malformed-header-content-type [discard|pass|...]
            set malformed-header-cseq [discard|pass|...]
            set malformed-header-expires [discard|pass|...]
            set malformed-header-from [discard|pass|...]
            set malformed-header-max-forwards [discard|pass|...]
            set malformed-header-no-proxy-require [discard|pass|...]
            set malformed-header-no-require [discard|pass|...]
            set malformed-header-p-asserted-identity [discard|pass|...]
            set malformed-header-rack [discard|pass|...]
            set malformed-header-record-route [discard|pass|...]
            set malformed-header-route [discard|pass|...]
            set malformed-header-rseq [discard|pass|...]
            set malformed-header-sdp-a [discard|pass|...]
            set malformed-header-sdp-b [discard|pass|...]
            set malformed-header-sdp-c [discard|pass|...]
            set malformed-header-sdp-i [discard|pass|...]
            set malformed-header-sdp-k [discard|pass|...]
            set malformed-header-sdp-m [discard|pass|...]
            set malformed-header-sdp-o [discard|pass|...]
            set malformed-header-sdp-r [discard|pass|...]
            set malformed-header-sdp-s [discard|pass|...]
            set malformed-header-sdp-t [discard|pass|...]
            set malformed-header-sdp-v [discard|pass|...]
            set malformed-header-sdp-z [discard|pass|...]
            set malformed-header-to [discard|pass|...]
            set malformed-header-via [discard|pass|...]
            set malformed-request-line [discard|pass|...]
            set max-body-length {integer}
            set max-dialogs {integer}
            set max-idle-dialogs {integer}
            set max-line-length {integer}
            set message-rate {integer}
            set message-rate-track [none|src-ip|...]
            set nat-port-range {user}
            set nat-trace [disable|enable]
            set no-sdp-fixup [disable|enable]
            set notify-rate {integer}
            set notify-rate-track [none|src-ip|...]
            set open-contact-pinhole [disable|enable]
            set open-record-route-pinhole [disable|enable]
            set open-register-pinhole [disable|enable]
            set open-via-pinhole [disable|enable]
            set options-rate {integer}
            set options-rate-track [none|src-ip|...]
            set prack-rate {integer}
            set prack-rate-track [none|src-ip|...]
            set preserve-override [disable|enable]
            set provisional-invite-expiry-time {integer}
            set publish-rate {integer}
            set publish-rate-track [none|src-ip|...]
            set refer-rate {integer}
            set refer-rate-track [none|src-ip|...]
            set register-contact-trace [disable|enable]
            set register-rate {integer}
            set register-rate-track [none|src-ip|...]
            set rfc2543-branch [disable|enable]
            set rtp [disable|enable]
            set ssl-algorithm [high|medium|...]
            set ssl-auth-client {string}
            set ssl-auth-server {string}
            set ssl-client-certificate {string}
            set ssl-client-renegotiation [allow|deny|...]
            set ssl-max-version [ssl-3.0|tls-1.0|...]
            set ssl-min-version [ssl-3.0|tls-1.0|...]
            set ssl-mode [off|full]
            set ssl-pfs [require|deny|...]
            set ssl-send-empty-frags [enable|disable]
            set ssl-server-certificate {string}
            set status [disable|enable]
            set strict-register [disable|enable]
            set subscribe-rate {integer}
            set subscribe-rate-track [none|src-ip|...]
            set unknown-header [discard|pass|...]
            set update-rate {integer}
            set update-rate-track [none|src-ip|...]
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

