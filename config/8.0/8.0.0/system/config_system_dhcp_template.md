# config system dhcp template

Configure DHCP server templates.

## Syntax

```
config system dhcp template
    Description: Configure DHCP server templates.
    edit <name>
        set auto-configuration [disable|enable]
        set conflicted-ip-timeout {integer}
        set ddns-auth [disable|tsig]
        set ddns-key {password_aes256}
        set ddns-keyname {string}
        set ddns-server-ip {ipv4-address}
        set ddns-ttl {integer}
        set ddns-update [disable|enable]
        set ddns-update-override [disable|enable]
        set ddns-zone {string}
        set dns-server1 {ipv4-address}
        set dns-server2 {ipv4-address}
        set dns-server3 {ipv4-address}
        set dns-server4 {ipv4-address}
        set dns-service [local|default|...]
        set domain {string}
        config exclude-range
            Description: Exclude one or more ranges of IP addresses from being assigned to clients.
            edit <id>
                set ip-count {integer}
                set lease-time {integer}
                set oui-match [disable|enable]
                set oui-string <oui-string1>, <oui-string2>, ...
                set start-ip-index {integer}
                set uci-match [disable|enable]
                set uci-string <uci-string1>, <uci-string2>, ...
                set vci-match [disable|enable]
                set vci-string <vci-string1>, <vci-string2>, ...
                set vendor {string}
            next
        end
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        set filename {string}
        set forticlient-on-net-status [disable|enable]
        config ip-range
            Description: DHCP IP range configuration.
            edit <id>
                set ip-count {integer}
                set lease-time {integer}
                set oui-match [disable|enable]
                set oui-string <oui-string1>, <oui-string2>, ...
                set reserve [disable|enable]
                set uci-match [disable|enable]
                set uci-string <uci-string1>, <uci-string2>, ...
                set vci-match [disable|enable]
                set vci-string <vci-string1>, <vci-string2>, ...
                set vendor {string}
            next
        end
        set ipsec-lease-hold {integer}
        set lease-time {integer}
        set mac-acl-default-action [assign|block]
        set next-server {ipv4-address}
        set ntp-server1 {ipv4-address}
        set ntp-server2 {ipv4-address}
        set ntp-server3 {ipv4-address}
        set ntp-service [local|default|...]
        config options
            Description: DHCP options.
            edit <id>
                set code {integer}
                set ip {user}
                set type [hex|string|...]
                set uci-match [disable|enable]
                set uci-string <uci-string1>, <uci-string2>, ...
                set value {string}
                set vci-match [disable|enable]
                set vci-string <vci-string1>, <vci-string2>, ...
            next
        end
        set relay-agent {ipv4-address}
        set reserve-extra-addresses [disable|enable]
        config reserved-address
            Description: Options for the DHCP server to assign IP settings to specific MAC addresses.
            edit <id>
                set action [assign|block|...]
                set circuit-id {string}
                set circuit-id-type [hex|string]
                set description {var-string}
                set ip-index {integer}
                set mac {mac-address}
                set remote-id {string}
                set remote-id-type [hex|string]
                set type [mac|option82]
            next
        end
        set server-type [regular|ipsec]
        set shared-subnet [disable|enable]
        set tftp-server <tftp-server1>, <tftp-server2>, ...
        set timezone {string}
        set timezone-option [disable|default|...]
        set uuid {uuid}
        set vci-match [disable|enable]
        set vci-string <vci-string1>, <vci-string2>, ...
        set wifi-ac-service [specify|local]
        set wifi-ac1 {ipv4-address}
        set wifi-ac2 {ipv4-address}
        set wifi-ac3 {ipv4-address}
        set wins-server1 {ipv4-address}
        set wins-server2 {ipv4-address}
    next
end
```

## Parameters

+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter                 | Description                       | Type               | Size               | Default                              |
+===========================+===================================+====================+====================+======================================+
| auto-configuration        | Enable/disable auto               | option             | \-                 | enable                               |
|                           | configuration.                    |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *disable*   | Disable auto configuration.                            |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *enable*    | Enable auto configuration.                             |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| conflicted-ip-timeout     | Time in seconds to wait after a   | integer            | Minimum value: 60  | 1800                                 |
|                           | conflicted IP address is removed  |                    | Maximum value:     |                                      |
|                           | from the DHCP range before it can |                    | 8640000            |                                      |
|                           | be reused.                        |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ddns-auth                 | DDNS authentication mode.         | option             | \-                 | disable                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *disable*   | Disable DDNS authentication.                           |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *tsig*      | TSIG based on RFC2845.                                 |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ddns-key                  | DDNS update key (base 64          | password_aes256    | Not Specified      |                                      |
|                           | encoding).                        |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ddns-keyname              | DDNS update key name.             | string             | Maximum length: 64 |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ddns-server-ip            | DDNS server IP.                   | ipv4-address       | Not Specified      | 0.0.0.0                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ddns-ttl                  | TTL.                              | integer            | Minimum value: 60  | 300                                  |
|                           |                                   |                    | Maximum value:     |                                      |
|                           |                                   |                    | 86400              |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ddns-update               | Enable/disable DDNS update for    | option             | \-                 | disable                              |
|                           | DHCP.                             |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *disable*   | Disable DDNS update for DHCP.                          |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *enable*    | Enable DDNS update for DHCP.                           |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ddns-update-override      | Enable/disable DDNS update        | option             | \-                 | disable                              |
|                           | override for DHCP.                |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *disable*   | Disable DDNS update override for DHCP.                 |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *enable*    | Enable DDNS update override for DHCP.                  |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ddns-zone                 | Zone of your domain name (ex.     | string             | Maximum length: 64 |                                      |
|                           | DDNS.com).                        |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dns-server1               | DNS server 1.                     | ipv4-address       | Not Specified      | 0.0.0.0                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dns-server2               | DNS server 2.                     | ipv4-address       | Not Specified      | 0.0.0.0                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dns-server3               | DNS server 3.                     | ipv4-address       | Not Specified      | 0.0.0.0                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dns-server4               | DNS server 4.                     | ipv4-address       | Not Specified      | 0.0.0.0                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dns-service               | Options for assigning DNS servers | option             | \-                 | default                              |
|                           | to DHCP clients.                  |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *local*     | IP address of the interface the DHCP server is added   |                                           |
|                           | |             | to becomes the client\'s DNS server IP address.        |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *default*   | Clients are assigned the FortiGate\'s configured DNS   |                                           |
|                           | |             | servers.                                               |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *specify*   | Specify up to 3 DNS servers in the DHCP server         |                                           |
|                           | |             | configuration.                                         |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| domain                    | Domain name suffix for the IP     | string             | Maximum length: 35 |                                      |
|                           | addresses that the DHCP server    |                    |                    |                                      |
|                           | assigns to clients.               |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-force-sync         | Enable/disable forced             | option             | \-                 | disable                              |
|                           | synchronization of configuration  |                    |                    |                                      |
|                           | objects from the root FortiGate   |                    |                    |                                      |
|                           | unit to the downstream devices.   |                    |                    |                                      |
|                           | Configuration conflict check is   |                    |                    |                                      |
|                           | skipped.                          |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *enable*    | Enable forced synchronization of configuration objects |                                           |
|                           | |             | from the root FortiGate unit to the downstream         |                                           |
|                           | |             | devices.                                               |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *disable*   | Disable forced synchronization of configuration        |                                           |
|                           | |             | objects from the root FortiGate unit to the downstream |                                           |
|                           | |             | devices.                                               |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object             | Security Fabric global object     | option             | \-                 | disable                              |
|                           | setting.                          |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *enable*    | Object is set as a security fabric-wide global object. |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *disable*   | Object is local to this security fabric member.        |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object-source      | Source of truth for fabric        | option             | \-                 | root                                 |
|                           | object.                           |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *member*    | Source of truth for this object is a non-root member   |                                           |
|                           | |             | of fabric.                                             |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *local*     | Source of truth for this object is this security       |                                           |
|                           | |             | fabric member.                                         |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *root*      | Source of truth for this object is the root of the     |                                           |
|                           | |             | fabric.                                                |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| filename                  | Name of the boot file on the TFTP | string             | Maximum length:    |                                      |
|                           | server.                           |                    | 127                |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| forticlient-on-net-status | Enable/disable FortiClient-On-Net | option             | \-                 | enable                               |
|                           | service for this DHCP server.     |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *disable*   | Disable FortiClient On-Net Status.                     |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *enable*    | Enable FortiClient On-Net Status.                      |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ipsec-lease-hold          | DHCP over IPsec leases expire     | integer            | Minimum value: 0   | 60                                   |
|                           | this many seconds after tunnel    |                    | Maximum value:     |                                      |
|                           | down (0 to disable                |                    | 8640000            |                                      |
|                           | forced-expiry).                   |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| lease-time                | Lease time in seconds, 0 means    | integer            | Minimum value: 300 | 604800                               |
|                           | unlimited.                        |                    | Maximum value:     |                                      |
|                           |                                   |                    | 8640000            |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| mac-acl-default-action    | MAC access control default action | option             | \-                 | assign                               |
|                           | (allow or block assigning IP      |                    |                    |                                      |
|                           | settings).                        |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *assign*    | Allow the DHCP server to assign IP settings to clients |                                           |
|                           | |             | on the MAC access control list.                        |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *block*     | Block the DHCP server from assigning IP settings to    |                                           |
|                           | |             | clients on the MAC access control list.                |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                      | DHCP server template name.        | string             | Maximum length: 35 |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| next-server               | IP address of a server, such as a | ipv4-address       | Not Specified      | 0.0.0.0                              |
|                           | TFTP server, from which DHCP      |                    |                    |                                      |
|                           | clients can download a boot file. |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ntp-server1               | NTP server 1.                     | ipv4-address       | Not Specified      | 0.0.0.0                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ntp-server2               | NTP server 2.                     | ipv4-address       | Not Specified      | 0.0.0.0                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ntp-server3               | NTP server 3.                     | ipv4-address       | Not Specified      | 0.0.0.0                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ntp-service               | Options for assigning Network     | option             | \-                 | default                              |
|                           | Time Protocol (NTP) servers to    |                    |                    |                                      |
|                           | DHCP clients.                     |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *local*     | IP address of the interface the DHCP server is added   |                                           |
|                           | |             | to becomes the client\'s NTP server IP address.        |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *default*   | Clients are assigned the FortiGate\'s configured NTP   |                                           |
|                           | |             | servers.                                               |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *specify*   | Specify up to 3 NTP servers in the DHCP server         |                                           |
|                           | |             | configuration.                                         |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| relay-agent               | Relay agent IP.                   | ipv4-address       | Not Specified      | 0.0.0.0                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| reserve-extra-addresses   | Enable/disable reservation of the | option             | \-                 | disable                              |
|                           | extra IP addresses in the subnet. |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *disable*   | Disable reservation of the extra IP addresses in the   |                                           |
|                           | |             | subnet.                                                |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *enable*    | Enable reservation of the extra IP addresses in the    |                                           |
|                           | |             | subnet.                                                |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| server-type               | DHCP server can be a normal DHCP  | option             | \-                 | regular                              |
|                           | server or an IPsec DHCP server.   |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *regular*   | Regular DHCP service.                                  |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *ipsec*     | DHCP over IPsec service.                               |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| shared-subnet             | Enable/disable shared subnet.     | option             | \-                 | disable                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *disable*   | Disable shared subnet.                                 |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *enable*    | Enable shared subnet.                                  |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| tftp-server               | One or more hostnames or IP       | string             | Maximum length: 63 |                                      |
| `<tftp-server>`           | addresses of the TFTP servers in  |                    |                    |                                      |
|                           | quotes separated by spaces.       |                    |                    |                                      |
|                           |                                   |                    |                    |                                      |
|                           | TFTP server.                      |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| timezone                  | Select the time zone to be        | string             | Maximum length: 63 |                                      |
|                           | assigned to DHCP clients.         |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| timezone-option           | Options for the DHCP server to    | option             | \-                 | disable                              |
|                           | set the client\'s time zone.      |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *disable*   | Do not set the client\'s time zone.                    |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *default*   | Clients are assigned the FortiGate\'s configured time  |                                           |
|                           | |             | zone.                                                  |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *specify*   | Specify the time zone to be assigned to DHCP clients.  |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid                      | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                           | (UUID; automatically assigned but |                    |                    |                                      |
|                           | can be manually reset).           |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| vci-match                 | Enable/disable vendor class       | option             | \-                 | disable                              |
|                           | identifier (VCI) matching. When   |                    |                    |                                      |
|                           | enabled only DHCP requests with a |                    |                    |                                      |
|                           | matching VCI are served.          |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *disable*   | Disable VCI matching.                                  |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *enable*    | Enable VCI matching.                                   |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| vci-string `<vci-string>` | One or more VCI strings in quotes | string             | Maximum length:    |                                      |
|                           | separated by spaces.              |                    | 255                |                                      |
|                           |                                   |                    |                    |                                      |
|                           | VCI strings.                      |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| wifi-ac-service           | Options for assigning WiFi access | option             | \-                 | specify                              |
|                           | controllers to DHCP clients.      |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | Option      | Description                                            |                                           |
|                           | +=============+========================================================+                                           |
|                           | | *specify*   | Specify up to 3 WiFi Access Controllers in the DHCP    |                                           |
|                           | |             | server configuration.                                  |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
|                           | | *local*     | IP address of the interface the DHCP server is added   |                                           |
|                           | |             | to becomes the client\'s WiFi Access Controller IP     |                                           |
|                           | |             | address.                                               |                                           |
|                           | +-------------+--------------------------------------------------------+                                           |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| wifi-ac1                  | WiFi Access Controller 1 IP       | ipv4-address       | Not Specified      | 0.0.0.0                              |
|                           | address (DHCP option 138, RFC     |                    |                    |                                      |
|                           | 5417).                            |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| wifi-ac2                  | WiFi Access Controller 2 IP       | ipv4-address       | Not Specified      | 0.0.0.0                              |
|                           | address (DHCP option 138, RFC     |                    |                    |                                      |
|                           | 5417).                            |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| wifi-ac3                  | WiFi Access Controller 3 IP       | ipv4-address       | Not Specified      | 0.0.0.0                              |
|                           | address (DHCP option 138, RFC     |                    |                    |                                      |
|                           | 5417).                            |                    |                    |                                      |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| wins-server1              | WINS server 1.                    | ipv4-address       | Not Specified      | 0.0.0.0                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| wins-server2              | WINS server 2.                    | ipv4-address       | Not Specified      | 0.0.0.0                              |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

