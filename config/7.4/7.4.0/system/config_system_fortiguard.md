# config system fortiguard

Configure FortiGuard services.

## Syntax

```
config system fortiguard
    Description: Configure FortiGuard services.
    set FDS-license-expiring-days {integer}
    set antispam-cache [enable|disable]
    set antispam-cache-mpermille {integer}
    set antispam-cache-ttl {integer}
    set antispam-expiration {integer}
    set antispam-force-off [enable|disable]
    set antispam-license {integer}
    set antispam-timeout {integer}
    set anycast-sdns-server-ip {ipv4-address}
    set anycast-sdns-server-port {integer}
    set auto-firmware-upgrade [enable|disable]
    set auto-firmware-upgrade-day {option1}, {option2}, ...
    set auto-firmware-upgrade-delay {integer}
    set auto-firmware-upgrade-end-hour {integer}
    set auto-firmware-upgrade-start-hour {integer}
    set auto-join-forticloud [enable|disable]
    set ddns-server-ip {ipv4-address}
    set ddns-server-ip6 {ipv6-address}
    set ddns-server-port {integer}
    set fortiguard-anycast [enable|disable]
    set fortiguard-anycast-source [fortinet|aws|...]
    set interface {string}
    set interface-select-method [auto|sdwan|...]
    set load-balance-servers {integer}
    set outbreak-prevention-cache [enable|disable]
    set outbreak-prevention-cache-mpermille {integer}
    set outbreak-prevention-cache-ttl {integer}
    set outbreak-prevention-expiration {integer}
    set outbreak-prevention-force-off [enable|disable]
    set outbreak-prevention-license {integer}
    set outbreak-prevention-timeout {integer}
    set persistent-connection [enable|disable]
    set port [8888|53|...]
    set protocol [udp|http|...]
    set proxy-password {password}
    set proxy-server-ip {string}
    set proxy-server-port {integer}
    set proxy-username {string}
    set sandbox-inline-scan [enable|disable]
    set sandbox-region {string}
    set sdns-options {option1}, {option2}, ...
    set sdns-server-ip {user}
    set sdns-server-port {integer}
    set service-account-id {string}
    set source-ip {ipv4-address}
    set source-ip6 {ipv6-address}
    set update-build-proxy [enable|disable]
    set update-dldb [enable|disable]
    set update-extdb [enable|disable]
    set update-ffdb [enable|disable]
    set update-server-location [automatic|usa|...]
    set update-uwdb [enable|disable]
    set vdom {string}
    set videofilter-expiration {integer}
    set videofilter-license {integer}
    set webfilter-cache [enable|disable]
    set webfilter-cache-ttl {integer}
    set webfilter-expiration {integer}
    set webfilter-force-off [enable|disable]
    set webfilter-license {integer}
    set webfilter-timeout {integer}
end
```

## Parameters

+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| Parameter                           | Description                       | Type                     | Size                     | Default                  |
+=====================================+===================================+==========================+==========================+==========================+
| FDS-license-expiring-days           | Threshold for number of days      | integer                  | Minimum value: 1 Maximum | 15                       |
|                                     | before FortiGuard license         |                          | value: 100               |                          |
|                                     | expiration to generate license    |                          |                          |                          |
|                                     | expiring event log.               |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-cache                      | Enable/disable FortiGuard         | option                   | \-                       | enable                   |
|                                     | antispam request caching. Uses a  |                          |                          |                          |
|                                     | small amount of memory but        |                          |                          |                          |
|                                     | improves performance.             |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable FortiGuard antispam request caching.            |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable FortiGuard antispam request caching.           |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-cache-mpermille            | Maximum permille of FortiGate     | integer                  | Minimum value: 1 Maximum | 1                        |
|                                     | memory the antispam cache is      |                          | value: 150               |                          |
|                                     | allowed to use.                   |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-cache-ttl                  | Time-to-live for antispam cache   | integer                  | Minimum value: 300       | 1800                     |
|                                     | entries in seconds. Lower times   |                          | Maximum value: 86400     |                          |
|                                     | reduce the cache size. Higher     |                          |                          |                          |
|                                     | times may improve performance     |                          |                          |                          |
|                                     | since the cache will have more    |                          |                          |                          |
|                                     | entries.                          |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-expiration                 | Expiration date of the FortiGuard | integer                  | Minimum value: 0 Maximum | 0                        |
|                                     | antispam contract.                |                          | value: 4294967295        |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-force-off                  | Enable/disable turning off the    | option                   | \-                       | disable                  |
|                                     | FortiGuard antispam service.      |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Turn off the FortiGuard antispam service.              |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Allow the FortiGuard antispam service.                 |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-license                    | Interval of time between license  | integer                  | Minimum value: 0 Maximum | 4294967295               |
|                                     | checks for the FortiGuard         |                          | value: 4294967295        |                          |
|                                     | antispam contract.                |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| antispam-timeout                    | Antispam query time out.          | integer                  | Minimum value: 1 Maximum | 7                        |
|                                     |                                   |                          | value: 30                |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| anycast-sdns-server-ip              | IP address of the FortiGuard      | ipv4-address             | Not Specified            | 0.0.0.0                  |
|                                     | anycast DNS rating server.        |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| anycast-sdns-server-port            | Port to connect to on the         | integer                  | Minimum value: 1 Maximum | 853                      |
|                                     | FortiGuard anycast DNS rating     |                          | value: 65535             |                          |
|                                     | server.                           |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-firmware-upgrade               | Enable/disable automatic          | option                   | \-                       | disable                  |
|                                     | patch-level firmware upgrade from |                          |                          |                          |
|                                     | FortiGuard. The FortiGate unit    |                          |                          |                          |
|                                     | searches for new patches only in  |                          |                          |                          |
|                                     | the same major and minor version. |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable automatic patch-level firmware upgrade to       |                                           |
|                                     | |             | latest version from FortiGuard.                        |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable automatic patch-level firmware upgrade to      |                                           |
|                                     | |             | latest version from FortiGuard.                        |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-firmware-upgrade-day           | Allowed day. Disallow any day of  | option                   | \-                       |                          |
|                                     | the week to use                   |                          |                          |                          |
|                                     | auto-firmware-upgrade-delay       |                          |                          |                          |
|                                     | instead, which waits for          |                          |                          |                          |
|                                     | designated days before installing |                          |                          |                          |
|                                     | an automatic patch-level firmware |                          |                          |                          |
|                                     | upgrade.                          |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *sunday*    | Sunday.                                                |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *monday*    | Monday.                                                |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *tuesday*   | Tuesday.                                               |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *wednesday* | Wednesday.                                             |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *thursday*  | Thursday.                                              |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *friday*    | Friday.                                                |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *saturday*  | Saturday.                                              |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-firmware-upgrade-delay         | Delay of day of the week for      | integer                  | Minimum value: 0 Maximum | 3                        |
|                                     | installing an automatic           |                          | value: 14                |                          |
|                                     | patch-level firmware upgrade.     |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-firmware-upgrade-end-hour      | End time in the designated time   | integer                  | Minimum value: 0 Maximum | 4                        |
|                                     | window for automatic patch-level  |                          | value: 23                |                          |
|                                     | firmware upgrade from FortiGuard  |                          |                          |                          |
|                                     | in 24 hour time. When the end     |                          |                          |                          |
|                                     | time is smaller than the start    |                          |                          |                          |
|                                     | time, the end time is interpreted |                          |                          |                          |
|                                     | as the next day. The actual       |                          |                          |                          |
|                                     | upgrade time is selected randomly |                          |                          |                          |
|                                     | within the time window.           |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-firmware-upgrade-start-hour    | Start time in the designated time | integer                  | Minimum value: 0 Maximum | 2                        |
|                                     | window for automatic patch-level  |                          | value: 23                |                          |
|                                     | firmware upgrade from FortiGuard  |                          |                          |                          |
|                                     | in 24 hour time. The actual       |                          |                          |                          |
|                                     | upgrade time is selected randomly |                          |                          |                          |
|                                     | within the time window.           |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-join-forticloud \*             | Automatically connect to and      | option                   | \-                       | enable                   |
|                                     | login to FortiCloud.              |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable automatic connection and login to FortiCloud.   |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable automatic connection and login to FortiCloud.  |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ddns-server-ip                      | IP address of the FortiDDNS       | ipv4-address             | Not Specified            | 0.0.0.0                  |
|                                     | server.                           |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ddns-server-ip6                     | IPv6 address of the FortiDDNS     | ipv6-address             | Not Specified            | ::                       |
|                                     | server.                           |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ddns-server-port                    | Port used to communicate with     | integer                  | Minimum value: 1 Maximum | 443                      |
|                                     | FortiDDNS servers.                |                          | value: 65535             |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fortiguard-anycast                  | Enable/disable use of             | option                   | \-                       | enable                   |
|                                     | FortiGuard\'s Anycast network.    |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable use of FortiGuard\'s Anycast network.           |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable use of FortiGuard\'s Anycast network.          |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fortiguard-anycast-source           | Configure which of Fortinet\'s    | option                   | \-                       | fortinet                 |
|                                     | servers to provide FortiGuard     |                          |                          |                          |
|                                     | services in FortiGuard\'s anycast |                          |                          |                          |
|                                     | network. Default is Fortinet.     |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *fortinet*  | Use Fortinet\'s servers to provide FortiGuard services |                                           |
|                                     | |             | in FortiGuard\'s anycast network.                      |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *aws*       | Use Fortinet\'s AWS servers to provide FortiGuard      |                                           |
|                                     | |             | services in FortiGuard\'s anycast network.             |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *debug*     | Use Fortinet\'s internal test servers to provide       |                                           |
|                                     | |             | FortiGuard services in FortiGuard\'s anycast network.  |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| interface                           | Specify outgoing interface to     | string                   | Maximum length: 15       |                          |
|                                     | reach server.                     |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| interface-select-method             | Specify how to select outgoing    | option                   | \-                       | auto                     |
|                                     | interface to reach server.        |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *auto*      | Set outgoing interface automatically.                  |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                                           |
|                                     | |             | rules.                                                 |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *specify*   | Set outgoing interface manually.                       |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| load-balance-servers                | Number of servers to alternate    | integer                  | Minimum value: 1 Maximum | 1                        |
|                                     | between as first FortiGuard       |                          | value: 266               |                          |
|                                     | option.                           |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-cache           | Enable/disable FortiGuard Virus   | option                   | \-                       | enable                   |
|                                     | Outbreak Prevention cache.        |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable FortiGuard antivirus caching.                   |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable FortiGuard antivirus caching.                  |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-cache-mpermille | Maximum permille of memory        | integer                  | Minimum value: 1 Maximum | 1                        |
|                                     | FortiGuard Virus Outbreak         |                          | value: 150               |                          |
|                                     | Prevention cache can use.         |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-cache-ttl       | Time-to-live for FortiGuard Virus | integer                  | Minimum value: 300       | 300                      |
|                                     | Outbreak Prevention cache         |                          | Maximum value: 86400     |                          |
|                                     | entries.                          |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-expiration      | Expiration date of FortiGuard     | integer                  | Minimum value: 0 Maximum | 0                        |
|                                     | Virus Outbreak Prevention         |                          | value: 4294967295        |                          |
|                                     | contract.                         |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-force-off       | Turn off FortiGuard Virus         | option                   | \-                       | disable                  |
|                                     | Outbreak Prevention service.      |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Turn off FortiGuard antivirus service.                 |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Allow the FortiGuard antivirus service.                |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-license         | Interval of time between license  | integer                  | Minimum value: 0 Maximum | 4294967295               |
|                                     | checks for FortiGuard Virus       |                          | value: 4294967295        |                          |
|                                     | Outbreak Prevention contract.     |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| outbreak-prevention-timeout         | FortiGuard Virus Outbreak         | integer                  | Minimum value: 1 Maximum | 7                        |
|                                     | Prevention time out.              |                          | value: 30                |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| persistent-connection               | Enable/disable use of persistent  | option                   | \-                       | disable                  |
|                                     | connection to receive update      |                          |                          |                          |
|                                     | notification from FortiGuard.     |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable persistent connection to receive update         |                                           |
|                                     | |             | notification from FortiGuard.                          |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable persistent connection to receive update        |                                           |
|                                     | |             | notification from FortiGuard.                          |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| port                                | Port used to communicate with the | option                   | \-                       | 443                      |
|                                     | FortiGuard servers.               |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *8888*      | port 8888 for server communication.                    |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *53*        | port 53 for server communication.                      |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *80*        | port 80 for server communication.                      |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *443*       | port 443 for server communication.                     |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| protocol                            | Protocol used to communicate with | option                   | \-                       | https                    |
|                                     | the FortiGuard servers.           |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *udp*       | UDP for server communication (for use by FortiGuard or |                                           |
|                                     | |             | FortiManager).                                         |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *http*      | HTTP for server communication (for use only by         |                                           |
|                                     | |             | FortiManager).                                         |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *https*     | HTTPS for server communication (for use by FortiGuard  |                                           |
|                                     | |             | or FortiManager).                                      |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| proxy-password                      | Proxy user password.              | password                 | Not Specified            |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| proxy-server-ip                     | Hostname or IPv4 address of the   | string                   | Maximum length: 63       |                          |
|                                     | proxy server.                     |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| proxy-server-port                   | Port used to communicate with the | integer                  | Minimum value: 0 Maximum | 0                        |
|                                     | proxy server.                     |                          | value: 65535             |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| proxy-username                      | Proxy user name.                  | string                   | Maximum length: 64       |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| sandbox-inline-scan                 | Enable/disable FortiCloud Sandbox | option                   | \-                       | disable                  |
|                                     | inline-scan.                      |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable FortiCloud Sandbox inline scan.                 |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable FortiCloud Sandbox inline scan.                |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| sandbox-region                      | FortiCloud Sandbox region.        | string                   | Maximum length: 63       |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| sdns-options                        | Customization options for the     | option                   | \-                       |                          |
|                                     | FortiGuard DNS service.           |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +----------------------------+--------------------------------------------------------+                            |
|                                     | | Option                     | Description                                            |                            |
|                                     | +============================+========================================================+                            |
|                                     | | *include-question-section* | Include DNS question section in the FortiGuard DNS     |                            |
|                                     | |                            | setup message.                                         |                            |
|                                     | +----------------------------+--------------------------------------------------------+                            |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| sdns-server-ip                      | IP address of the FortiGuard DNS  | user                     | Not Specified            |                          |
|                                     | rating server.                    |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| sdns-server-port                    | Port to connect to on the         | integer                  | Minimum value: 1 Maximum | 53                       |
|                                     | FortiGuard DNS rating server.     |                          | value: 65535             |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| service-account-id                  | Service account ID.               | string                   | Maximum length: 50       |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| source-ip                           | Source IPv4 address used to       | ipv4-address             | Not Specified            | 0.0.0.0                  |
|                                     | communicate with FortiGuard.      |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| source-ip6                          | Source IPv6 address used to       | ipv6-address             | Not Specified            | ::                       |
|                                     | communicate with FortiGuard.      |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| update-build-proxy                  | Enable/disable proxy dictionary   | option                   | \-                       | enable                   |
|                                     | rebuild.                          |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable proxy dictionary rebuild.                       |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable proxy dictionary rebuild.                      |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| update-dldb                         | Enable/disable DLP signature      | option                   | \-                       | enable                   |
|                                     | update.                           |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable DLP signature update.                           |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable DLP signature update.                          |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| update-extdb                        | Enable/disable external resource  | option                   | \-                       | enable                   |
|                                     | update.                           |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable external resource update.                       |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable external resource update.                      |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| update-ffdb                         | Enable/disable Internet Service   | option                   | \-                       | enable                   |
|                                     | Database update.                  |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable Internet Service Database update.               |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable Internet Service Database update.              |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| update-server-location              | Location from which to receive    | option                   | \-                       | automatic                |
|                                     | FortiGuard updates.               |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *automatic* | FortiGuard servers chosen based on closest proximity   |                                           |
|                                     | |             | to FortiGate unit.                                     |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *usa*       | FortiGuard servers in United States.                   |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *eu*        | FortiGuard servers in the European Union.              |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| update-uwdb                         | Enable/disable allowlist update.  | option                   | \-                       | enable                   |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable allowlist update.                               |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable allowlist update.                              |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| vdom                                | FortiGuard Service virtual domain | string                   | Maximum length: 31       |                          |
|                                     | name.                             |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| videofilter-expiration              | Expiration date of the FortiGuard | integer                  | Minimum value: 0 Maximum | 0                        |
|                                     | video filter contract.            |                          | value: 4294967295        |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| videofilter-license                 | Interval of time between license  | integer                  | Minimum value: 0 Maximum | 4294967295               |
|                                     | checks for the FortiGuard video   |                          | value: 4294967295        |                          |
|                                     | filter contract.                  |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-cache                     | Enable/disable FortiGuard web     | option                   | \-                       | enable                   |
|                                     | filter caching.                   |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Enable FortiGuard web filter caching.                  |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Disable FortiGuard web filter caching.                 |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-cache-ttl                 | Time-to-live for web filter cache | integer                  | Minimum value: 300       | 3600                     |
|                                     | entries in seconds.               |                          | Maximum value: 86400     |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-expiration                | Expiration date of the FortiGuard | integer                  | Minimum value: 0 Maximum | 0                        |
|                                     | web filter contract.              |                          | value: 4294967295        |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-force-off                 | Enable/disable turning off the    | option                   | \-                       | disable                  |
|                                     | FortiGuard web filtering service. |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | Option      | Description                                            |                                           |
|                                     | +=============+========================================================+                                           |
|                                     | | *enable*    | Turn off the FortiGuard web filtering service.         |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
|                                     | | *disable*   | Allow the FortiGuard web filtering service to operate. |                                           |
|                                     | +-------------+--------------------------------------------------------+                                           |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-license                   | Interval of time between license  | integer                  | Minimum value: 0 Maximum | 4294967295               |
|                                     | checks for the FortiGuard web     |                          | value: 4294967295        |                          |
|                                     | filter contract.                  |                          |                          |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| webfilter-timeout                   | Web filter query time out.        | integer                  | Minimum value: 1 Maximum | 15                       |
|                                     |                                   |                          | value: 30                |                          |
+-------------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+

