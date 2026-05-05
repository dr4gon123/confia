# config firewall proxy-policy

Configure proxy policies.

## Syntax

```
config firewall proxy-policy
    Description: Configure proxy policies.
    edit <policyid>
        set access-proxy <name1>, <name2>, ...
        set access-proxy6 <name1>, <name2>, ...
        set action [accept|deny|...]
        set application-list {string}
        set av-profile {string}
        set block-notification [enable|disable]
        set casb-profile {string}
        set comments {var-string}
        set decrypted-traffic-mirror {string}
        set detect-https-in-http-request [enable|disable]
        set device-ownership [enable|disable]
        set disclaimer [disable|domain|...]
        set dlp-profile {string}
        set dnsfilter-profile {string}
        set dstaddr <name1>, <name2>, ...
        set dstaddr-negate [enable|disable]
        set dstaddr6 <name1>, <name2>, ...
        set dstintf <name1>, <name2>, ...
        set emailfilter-profile {string}
        set file-filter-profile {string}
        set groups <name1>, <name2>, ...
        set http-tunnel-auth [enable|disable]
        set icap-profile {string}
        set internet-service [enable|disable]
        set internet-service-custom <name1>, <name2>, ...
        set internet-service-custom-group <name1>, <name2>, ...
        set internet-service-group <name1>, <name2>, ...
        set internet-service-name <name1>, <name2>, ...
        set internet-service-negate [enable|disable]
        set internet-service6 [enable|disable]
        set internet-service6-custom <name1>, <name2>, ...
        set internet-service6-custom-group <name1>, <name2>, ...
        set internet-service6-group <name1>, <name2>, ...
        set internet-service6-name <name1>, <name2>, ...
        set internet-service6-negate [enable|disable]
        set ips-sensor {string}
        set ips-voip-filter {string}
        set isolator-server {string}
        set log-http-transaction [enable|disable]
        set logtraffic [all|utm|...]
        set logtraffic-start [enable|disable]
        set name {string}
        set poolname <name1>, <name2>, ...
        set profile-group {string}
        set profile-protocol-options {string}
        set profile-type [single|group]
        set proxy [explicit-web|transparent-web|...]
        set redirect-url {var-string}
        set replacemsg-override-group {string}
        set schedule {string}
        set service <name1>, <name2>, ...
        set service-negate [enable|disable]
        set session-ttl {integer}
        set srcaddr <name1>, <name2>, ...
        set srcaddr-negate [enable|disable]
        set srcaddr6 <name1>, <name2>, ...
        set srcintf <name1>, <name2>, ...
        set ssh-filter-profile {string}
        set ssh-policy-redirect [enable|disable]
        set ssl-ssh-profile {string}
        set status [enable|disable]
        set transparent [enable|disable]
        set url-risk <name1>, <name2>, ...
        set users <name1>, <name2>, ...
        set utm-status [enable|disable]
        set uuid {uuid}
        set videofilter-profile {string}
        set waf-profile {string}
        set webcache [enable|disable]
        set webcache-https [disable|enable]
        set webfilter-profile {string}
        set webproxy-forward-server {string}
        set webproxy-profile {string}
        set ztna-ems-tag <name1>, <name2>, ...
        set ztna-ems-tag-negate [enable|disable]
        set ztna-proxy <name1>, <name2>, ...
        set ztna-tags-match-logic [or|and]
    next
end
```

## Parameters

+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| Parameter                      | Description                       | Type                  | Size                  | Default                              |
+================================+===================================+=======================+=======================+======================================+
| access-proxy `<name>`          | IPv4 access proxy.                | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Access Proxy name.                |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| access-proxy6 `<name>`         | IPv6 access proxy.                | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Access proxy name.                |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| action                         | Accept or deny traffic matching   | option                | \-                    | deny                                 |
|                                | the policy parameters.            |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *accept*    | Action accept.                                         |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *deny*      | Action deny.                                           |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *redirect*  | Action redirect.                                       |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *isolate*   | Action isolate.                                        |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| application-list               | Name of an existing Application   | string                | Maximum length: 47    |                                      |
|                                | list.                             |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| av-profile                     | Name of an existing Antivirus     | string                | Maximum length: 47    |                                      |
|                                | profile.                          |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| block-notification             | Enable/disable block              | option                | \-                    | disable                              |
|                                | notification.                     |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable setting.                                        |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable setting.                                       |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| casb-profile                   | Name of an existing CASB profile. | string                | Maximum length: 47    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| comments                       | Optional comments.                | var-string            | Maximum length: 1023  |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| decrypted-traffic-mirror       | Decrypted traffic mirror.         | string                | Maximum length: 35    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| detect-https-in-http-request   | Enable/disable detection of HTTPS | option                | \-                    | disable                              |
|                                | in HTTP request.                  |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable detection of HTTPS in HTTP request.             |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable detection of HTTPS in HTTP request.            |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| device-ownership               | When enabled, the ownership       | option                | \-                    | disable                              |
|                                | enforcement will be done at       |                       |                       |                                      |
|                                | policy level.                     |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable device ownership.                               |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable device ownership.                              |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| disclaimer                     | Web proxy disclaimer setting: by  | option                | \-                    | disable                              |
|                                | domain, policy, or user.          |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *disable*   | Disable disclaimer.                                    |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *domain*    | Display disclaimer for domain                          |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *policy*    | Display disclaimer for policy                          |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *user*      | Display disclaimer for current user                    |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| dlp-profile                    | Name of an existing DLP profile.  | string                | Maximum length: 47    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| dnsfilter-profile              | Name of an existing DNS filter    | string                | Maximum length: 47    |                                      |
|                                | profile.                          |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| dstaddr `<name>`               | Destination address objects.      | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Address name.                     |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| dstaddr-negate                 | When enabled, destination         | option                | \-                    | disable                              |
|                                | addresses match against any       |                       |                       |                                      |
|                                | address EXCEPT the specified      |                       |                       |                                      |
|                                | destination addresses.            |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable source address negate.                          |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable destination address negate.                    |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| dstaddr6 `<name>`              | IPv6 destination address objects. | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Address name.                     |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| dstintf `<name>`               | Destination interface names.      | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Interface name.                   |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| emailfilter-profile            | Name of an existing email filter  | string                | Maximum length: 47    |                                      |
|                                | profile.                          |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| file-filter-profile            | Name of an existing file-filter   | string                | Maximum length: 47    |                                      |
|                                | profile.                          |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| groups `<name>`                | Names of group objects.           | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Group name.                       |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| http-tunnel-auth               | Enable/disable HTTP tunnel        | option                | \-                    | disable                              |
|                                | authentication.                   |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable setting.                                        |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable setting.                                       |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| icap-profile                   | Name of an existing ICAP profile. | string                | Maximum length: 47    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service               | Enable/disable use of Internet    | option                | \-                    | disable                              |
|                                | Services for this policy. If      |                       |                       |                                      |
|                                | enabled, destination address and  |                       |                       |                                      |
|                                | service are not used.             |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable use of Internet Services in policy.             |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable use of Internet Services in policy.            |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service-custom        | Custom Internet Service name.     | string                | Maximum length: 79    |                                      |
| `<name>`                       |                                   |                       |                       |                                      |
|                                | Custom Internet Service name.     |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service-custom-group  | Custom Internet Service group     | string                | Maximum length: 79    |                                      |
| `<name>`                       | name.                             |                       |                       |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Custom Internet Service group     |                       |                       |                                      |
|                                | name.                             |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service-group         | Internet Service group name.      | string                | Maximum length: 79    |                                      |
| `<name>`                       |                                   |                       |                       |                                      |
|                                | Internet Service group name.      |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service-name `<name>` | Internet Service name.            | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Internet Service name.            |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service-negate        | When enabled, Internet Services   | option                | \-                    | disable                              |
|                                | match against any internet        |                       |                       |                                      |
|                                | service EXCEPT the selected       |                       |                       |                                      |
|                                | Internet Service.                 |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable negated Internet Service match.                 |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable negated Internet Service match.                |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service6              | Enable/disable use of Internet    | option                | \-                    | disable                              |
|                                | Services IPv6 for this policy. If |                       |                       |                                      |
|                                | enabled, destination IPv6 address |                       |                       |                                      |
|                                | and service are not used.         |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable use of IPv6 Internet Services in policy.        |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable use of IPv6 Internet Services in policy.       |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service6-custom       | Custom Internet Service IPv6      | string                | Maximum length: 79    |                                      |
| `<name>`                       | name.                             |                       |                       |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Custom Internet Service IPv6      |                       |                       |                                      |
|                                | name.                             |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service6-custom-group | Custom Internet Service IPv6      | string                | Maximum length: 79    |                                      |
| `<name>`                       | group name.                       |                       |                       |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Custom Internet Service IPv6      |                       |                       |                                      |
|                                | group name.                       |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service6-group        | Internet Service IPv6 group name. | string                | Maximum length: 79    |                                      |
| `<name>`                       |                                   |                       |                       |                                      |
|                                | Internet Service IPv6 group name. |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service6-name         | Internet Service IPv6 name.       | string                | Maximum length: 79    |                                      |
| `<name>`                       |                                   |                       |                       |                                      |
|                                | Internet Service IPv6 name.       |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| internet-service6-negate       | When enabled, Internet Services   | option                | \-                    | disable                              |
|                                | match against any internet        |                       |                       |                                      |
|                                | service IPv6 EXCEPT the selected  |                       |                       |                                      |
|                                | Internet Service IPv6.            |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable negated IPv6 Internet Service match.            |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable negated IPv6 Internet Service match.           |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| ips-sensor                     | Name of an existing IPS sensor.   | string                | Maximum length: 47    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| ips-voip-filter                | Name of an existing VoIP (ips)    | string                | Maximum length: 47    |                                      |
|                                | profile.                          |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| isolator-server                | Isolator server name.             | string                | Maximum length: 63    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| log-http-transaction           | Enable/disable HTTP transaction   | option                | \-                    | disable                              |
|                                | log.                              |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable HTTP transaction log.                           |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable HTTP transaction log.                          |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| logtraffic                     | Enable/disable logging traffic    | option                | \-                    | utm                                  |
|                                | through the policy.               |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *all*       | Log all sessions.                                      |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *utm*       | UTM event and matched application traffic log.         |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable traffic and application log.                   |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| logtraffic-start               | Enable/disable policy log traffic | option                | \-                    | disable                              |
|                                | start.                            |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable setting.                                        |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable setting.                                       |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| name                           | Policy name.                      | string                | Maximum length: 35    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| policyid                       | Policy ID.                        | integer               | Minimum value: 0      | 0                                    |
|                                |                                   |                       | Maximum value:        |                                      |
|                                |                                   |                       | 4294967295            |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| poolname `<name>`              | Name of IP pool object.           | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | IP pool name.                     |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| profile-group                  | Name of profile group.            | string                | Maximum length: 47    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| profile-protocol-options       | Name of an existing Protocol      | string                | Maximum length: 47    | default                              |
|                                | options profile.                  |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| profile-type                   | Determine whether the firewall    | option                | \-                    | single                               |
|                                | policy allows security profile    |                       |                       |                                      |
|                                | groups or single profiles only.   |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *single*    | Do not allow security profile groups.                  |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *group*     | Allow security profile groups.                         |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| proxy                          | Type of explicit proxy.           | option                | \-                    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------------+--------------------------------------------------------+                                           |
|                                | | Option            | Description                                            |                                           |
|                                | +===================+========================================================+                                           |
|                                | | *explicit-web*    | Explicit Web Proxy                                     |                                           |
|                                | +-------------------+--------------------------------------------------------+                                           |
|                                | | *transparent-web* | Transparent Web Proxy                                  |                                           |
|                                | +-------------------+--------------------------------------------------------+                                           |
|                                | | *ftp*             | Explicit FTP Proxy                                     |                                           |
|                                | +-------------------+--------------------------------------------------------+                                           |
|                                | | *ssh*             | SSH Proxy                                              |                                           |
|                                | +-------------------+--------------------------------------------------------+                                           |
|                                | | *ssh-tunnel*      | SSH Tunnel                                             |                                           |
|                                | +-------------------+--------------------------------------------------------+                                           |
|                                | | *access-proxy*    | Access Proxy                                           |                                           |
|                                | +-------------------+--------------------------------------------------------+                                           |
|                                | | *ztna-proxy*      | ZTNA Proxy                                             |                                           |
|                                | +-------------------+--------------------------------------------------------+                                           |
|                                | | *wanopt*          | WANopt Tunnel                                          |                                           |
|                                | +-------------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| redirect-url                   | Redirect URL for further explicit | var-string            | Maximum length: 1023  |                                      |
|                                | web proxy processing.             |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| replacemsg-override-group      | Authentication replacement        | string                | Maximum length: 35    |                                      |
|                                | message override group.           |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| schedule                       | Name of schedule object.          | string                | Maximum length: 35    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| service `<name>`               | Name of service objects.          | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Service name.                     |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| service-negate                 | When enabled, services match      | option                | \-                    | disable                              |
|                                | against any service EXCEPT the    |                       |                       |                                      |
|                                | specified destination services.   |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable negated service match.                          |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable negated service match.                         |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| session-ttl                    | TTL in seconds for sessions       | integer               | Minimum value: 300    | 0                                    |
|                                | accepted by this policy.          |                       | Maximum value:        |                                      |
|                                |                                   |                       | 2764800               |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| srcaddr `<name>`               | Source address objects.           | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Address name.                     |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| srcaddr-negate                 | When enabled, source addresses    | option                | \-                    | disable                              |
|                                | match against any address EXCEPT  |                       |                       |                                      |
|                                | the specified source addresses.   |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable source address negate.                          |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable destination address negate.                    |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| srcaddr6 `<name>`              | IPv6 source address objects.      | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Address name.                     |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| srcintf `<name>`               | Source interface names.           | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Interface name.                   |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| ssh-filter-profile             | Name of an existing SSH filter    | string                | Maximum length: 47    |                                      |
|                                | profile.                          |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| ssh-policy-redirect            | Redirect SSH traffic to matching  | option                | \-                    | disable                              |
|                                | transparent proxy policy.         |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable SSH policy redirect.                            |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable SSH policy redirect.                           |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| ssl-ssh-profile                | Name of an existing SSL SSH       | string                | Maximum length: 47    | no-inspection                        |
|                                | profile.                          |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| status                         | Enable/disable the active status  | option                | \-                    | enable                               |
|                                | of the policy.                    |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable setting.                                        |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable setting.                                       |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| transparent                    | Enable to use the IP address of   | option                | \-                    | disable                              |
|                                | the client to connect to the      |                       |                       |                                      |
|                                | server.                           |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable use of IP address of client to connect to       |                                                 |
|                                | |             | server.                                                |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable use of IP address of client to connect to      |                                                 |
|                                | |             | server.                                                |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| url-risk `<name>`              | URL risk level name.              | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Risk level name.                  |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| users `<name>`                 | Names of user objects.            | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | Group name.                       |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| utm-status                     | Enable the use of UTM             | option                | \-                    | disable                              |
|                                | profiles/sensors/lists.           |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable setting.                                        |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable setting.                                       |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| uuid                           | Universally Unique Identifier     | uuid                  | Not Specified         | 00000000-0000-0000-0000-000000000000 |
|                                | (UUID; automatically assigned but |                       |                       |                                      |
|                                | can be manually reset).           |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| videofilter-profile            | Name of an existing VideoFilter   | string                | Maximum length: 47    |                                      |
|                                | profile.                          |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| waf-profile                    | Name of an existing Web           | string                | Maximum length: 47    |                                      |
|                                | application firewall profile.     |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| webcache \*                    | Enable/disable web caching.       | option                | \-                    | disable                              |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable setting.                                        |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable setting.                                       |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| webcache-https \*              | Enable/disable web caching for    | option                | \-                    | disable                              |
|                                | HTTPS (Requires deep-inspection   |                       |                       |                                      |
|                                | enabled in ssl-ssh-profile).      |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *disable*   | Disable web cache for HTTPS.                           |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *enable*    | Enable web cache for HTTPS.                            |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| webfilter-profile              | Name of an existing Web filter    | string                | Maximum length: 47    |                                      |
|                                | profile.                          |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| webproxy-forward-server        | Web proxy forward server name.    | string                | Maximum length: 63    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| webproxy-profile               | Name of web proxy profile.        | string                | Maximum length: 63    |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| ztna-ems-tag `<name>`          | ZTNA EMS Tag names.               | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | EMS Tag name.                     |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| ztna-ems-tag-negate            | When enabled, ZTNA EMS tags match | option                | \-                    | disable                              |
|                                | against any tag EXCEPT the        |                       |                       |                                      |
|                                | specified ZTNA EMS tags.          |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *enable*    | Enable ZTNA EMS tags negate.                           |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *disable*   | Disable ZTNA EMS tags negate.                          |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| ztna-proxy `<name>`            | ZTNA proxies.                     | string                | Maximum length: 79    |                                      |
|                                |                                   |                       |                       |                                      |
|                                | ZTNA proxy name.                  |                       |                       |                                      |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
| ztna-tags-match-logic          | ZTNA tag matching logic.          | option                | \-                    | or                                   |
+--------------------------------+-----------------------------------+-----------------------+-----------------------+--------------------------------------+
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | Option      | Description                                            |                                                 |
|                                | +=============+========================================================+                                                 |
|                                | | *or*        | Match ZTNA tags using a logical OR operator.           |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
|                                | | *and*       | Match ZTNA tags using a logical AND operator.          |                                                 |
|                                | +-------------+--------------------------------------------------------+                                                 |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------------+

