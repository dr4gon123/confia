# config web-proxy global

Configure Web proxy global settings.

## Syntax

```
config web-proxy global
    Description: Configure Web proxy global settings.
    set always-learn-client-ip [enable|disable]
    set fast-policy-match [enable|disable]
    set forward-proxy-auth [enable|disable]
    set forward-server-affinity-timeout {integer}
    set ldap-user-cache [enable|disable]
    set learn-client-ip [enable|disable]
    set learn-client-ip-from-header {option1}, {option2}, ...
    set learn-client-ip-srcaddr <name1>, <name2>, ...
    set learn-client-ip-srcaddr6 <name1>, <name2>, ...
    set log-app-id [enable|disable]
    set log-forward-server [enable|disable]
    set log-policy-pending [enable|disable]
    set max-message-length {integer}
    set max-request-length {integer}
    set max-waf-body-cache-length {integer}
    set policy-category-deep-inspect [enable|disable]
    set proxy-fqdn {string}
    set proxy-transparent-cert-inspection [enable|disable]
    set src-affinity-exempt-addr {ipv4-address-any}
    set src-affinity-exempt-addr6 {ipv6-address}
    set ssl-ca-cert {string}
    set ssl-cert {string}
    set strict-web-check [enable|disable]
    set webproxy-profile {string}
end
```

## Parameters

+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter                         | Description                       | Type                  | Size                  | Default               |
+===================================+===================================+=======================+=======================+=======================+
| always-learn-client-ip            | Enable/disable learning the       | option                | \-                    | disable               |
|                                   | client\'s IP address from headers |                       |                       |                       |
|                                   | for every request.                |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | Option      | Description                                            |                                  |
|                                   | +=============+========================================================+                                  |
|                                   | | *enable*    | Enable learning the client\'s IP address from headers  |                                  |
|                                   | |             | for every request.                                     |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | *disable*   | Disable learning the client\'s IP address from headers |                                  |
|                                   | |             | for every request.                                     |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| fast-policy-match                 | Enable/disable fast matching      | option                | \-                    | enable                |
|                                   | algorithm for explicit and        |                       |                       |                       |
|                                   | transparent proxy policy.         |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | Option      | Description                                            |                                  |
|                                   | +=============+========================================================+                                  |
|                                   | | *enable*    | Enable setting.                                        |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | *disable*   | Disable setting.                                       |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| forward-proxy-auth                | Enable/disable forwarding proxy   | option                | \-                    | disable               |
|                                   | authentication headers.           |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | Option      | Description                                            |                                  |
|                                   | +=============+========================================================+                                  |
|                                   | | *enable*    | Enable forwarding proxy authentication headers.        |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | *disable*   | Disable forwarding proxy authentication headers.       |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| forward-server-affinity-timeout   | Period of time before the source  | integer               | Minimum value: 6      | 30                    |
|                                   | IP\'s traffic is no longer        |                       | Maximum value: 60     |                       |
|                                   | assigned to the forwarding server |                       |                       |                       |
|                                   | (6 - 60 min, default = 30).       |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ldap-user-cache                   | Enable/disable LDAP user cache    | option                | \-                    | disable               |
|                                   | for explicit and transparent      |                       |                       |                       |
|                                   | proxy user.                       |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | Option      | Description                                            |                                  |
|                                   | +=============+========================================================+                                  |
|                                   | | *enable*    | Enable setting.                                        |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | *disable*   | Disable setting.                                       |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| learn-client-ip                   | Enable/disable learning the       | option                | \-                    | disable               |
|                                   | client\'s IP address from         |                       |                       |                       |
|                                   | headers.                          |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | Option      | Description                                            |                                  |
|                                   | +=============+========================================================+                                  |
|                                   | | *enable*    | Enable learning the client\'s IP address from headers. |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | *disable*   | Disable learning the client\'s IP address from         |                                  |
|                                   | |             | headers.                                               |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| learn-client-ip-from-header       | Learn client IP address from the  | option                | \-                    |                       |
|                                   | specified headers.                |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------------+--------------------------------------------------------+                            |
|                                   | | Option            | Description                                            |                            |
|                                   | +===================+========================================================+                            |
|                                   | | *true-client-ip*  | Learn the client IP address from the True-Client-IP    |                            |
|                                   | |                   | header.                                                |                            |
|                                   | +-------------------+--------------------------------------------------------+                            |
|                                   | | *x-real-ip*       | Learn the client IP address from the X-Real-IP header. |                            |
|                                   | +-------------------+--------------------------------------------------------+                            |
|                                   | | *x-forwarded-for* | Learn the client IP address from the X-Forwarded-For   |                            |
|                                   | |                   | header.                                                |                            |
|                                   | +-------------------+--------------------------------------------------------+                            |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| learn-client-ip-srcaddr `<name>`  | Source address name (srcaddr or   | string                | Maximum length: 79    |                       |
|                                   | srcaddr6 must be set).            |                       |                       |                       |
|                                   |                                   |                       |                       |                       |
|                                   | Address name.                     |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| learn-client-ip-srcaddr6 `<name>` | IPv6 Source address name (srcaddr | string                | Maximum length: 79    |                       |
|                                   | or srcaddr6 must be set).         |                       |                       |                       |
|                                   |                                   |                       |                       |                       |
|                                   | Address name.                     |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| log-app-id                        | Enable/disable always log         | option                | \-                    | disable               |
|                                   | application type in traffic log.  |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | Option      | Description                                            |                                  |
|                                   | +=============+========================================================+                                  |
|                                   | | *enable*    | Enable logging application type in traffic log.        |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | *disable*   | Disable logging application type in traffic log.       |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| log-forward-server                | Enable/disable forward server     | option                | \-                    | disable               |
|                                   | name logging in forward traffic   |                       |                       |                       |
|                                   | log.                              |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | Option      | Description                                            |                                  |
|                                   | +=============+========================================================+                                  |
|                                   | | *enable*    | Enable logging forward server name in forward traffic  |                                  |
|                                   | |             | log.                                                   |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | *disable*   | Disable logging forward server name in forward traffic |                                  |
|                                   | |             | log.                                                   |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| log-policy-pending                | Enable/disable logging sessions   | option                | \-                    | disable               |
|                                   | that are pending on policy        |                       |                       |                       |
|                                   | matching.                         |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | Option      | Description                                            |                                  |
|                                   | +=============+========================================================+                                  |
|                                   | | *enable*    | Enable logging sessions that are pending on policy     |                                  |
|                                   | |             | matching.                                              |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | *disable*   | Disable logging sessions that are pending on policy    |                                  |
|                                   | |             | matching.                                              |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| max-message-length                | Maximum length of HTTP message,   | integer               | Minimum value: 16     | 32                    |
|                                   | not including body (16 - 256      |                       | Maximum value: 256    |                       |
|                                   | Kbytes, default = 32).            |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| max-request-length                | Maximum length of HTTP request    | integer               | Minimum value: 2      | 8                     |
|                                   | line (2 - 64 Kbytes, default =    |                       | Maximum value: 64     |                       |
|                                   | 8).                               |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| max-waf-body-cache-length         | Maximum length of HTTP messages   | integer               | Minimum value: 10     | 32                    |
|                                   | processed by Web Application      |                       | Maximum value: 1024   |                       |
|                                   | Firewall (WAF) (10 - 1024 Kbytes, |                       |                       |                       |
|                                   | default = 32).                    |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| policy-category-deep-inspect      | Enable/disable deep inspection    | option                | \-                    | enable                |
|                                   | for application level category    |                       |                       |                       |
|                                   | policy matching.                  |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | Option      | Description                                            |                                  |
|                                   | +=============+========================================================+                                  |
|                                   | | *enable*    | Enable deep inspection for application level category  |                                  |
|                                   | |             | policy matching.                                       |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | *disable*   | Disable deep inspection for application level category |                                  |
|                                   | |             | policy matching.                                       |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| proxy-fqdn                        | Fully Qualified Domain Name       | string                | Maximum length: 255   | default.fqdn          |
|                                   | (FQDN) that clients connect to    |                       |                       |                       |
|                                   | (default = default.fqdn) to       |                       |                       |                       |
|                                   | connect to the explicit web       |                       |                       |                       |
|                                   | proxy.                            |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| proxy-transparent-cert-inspection | Enable/disable transparent proxy  | option                | \-                    | disable               |
|                                   | certificate inspection.           |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | Option      | Description                                            |                                  |
|                                   | +=============+========================================================+                                  |
|                                   | | *enable*    | Enable proxying certificate inspection in transparent  |                                  |
|                                   | |             | mode.                                                  |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | *disable*   | Disable proxying certificate inspection in transparent |                                  |
|                                   | |             | mode.                                                  |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| src-affinity-exempt-addr          | IPv4 source addresses to exempt   | ipv4-address-any      | Not Specified         |                       |
|                                   | proxy affinity.                   |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| src-affinity-exempt-addr6         | IPv6 source addresses to exempt   | ipv6-address          | Not Specified         |                       |
|                                   | proxy affinity.                   |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ssl-ca-cert                       | SSL CA certificate for SSL        | string                | Maximum length: 35    | Fortinet_CA_SSL       |
|                                   | interception.                     |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ssl-cert                          | SSL certificate for SSL           | string                | Maximum length: 35    | Fortinet_Factory      |
|                                   | interception.                     |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| strict-web-check                  | Enable/disable strict web         | option                | \-                    | disable               |
|                                   | checking to block web sites that  |                       |                       |                       |
|                                   | send incorrect headers that       |                       |                       |                       |
|                                   | don\'t conform to HTTP 1.1.       |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | Option      | Description                                            |                                  |
|                                   | +=============+========================================================+                                  |
|                                   | | *enable*    | Enable strict web checking.                            |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
|                                   | | *disable*   | Disable strict web checking.                           |                                  |
|                                   | +-------------+--------------------------------------------------------+                                  |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| webproxy-profile                  | Name of the web proxy profile to  | string                | Maximum length: 63    |                       |
|                                   | apply when explicit proxy traffic |                       |                       |                       |
|                                   | is allowed by default and traffic |                       |                       |                       |
|                                   | is accepted that does not match   |                       |                       |                       |
|                                   | an explicit proxy policy.         |                       |                       |                       |
+-----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+

