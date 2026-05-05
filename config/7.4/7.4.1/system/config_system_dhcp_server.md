# config system dhcp server

Configure DHCP servers.

## Syntax

```
config system dhcp server
    Description: Configure DHCP servers.
    edit <id>
        set auto-configuration [disable|enable]
        set auto-managed-status [disable|enable]
        set conflicted-ip-timeout {integer}
        set ddns-auth [disable|tsig]
        set ddns-key {password_aes256}
        set ddns-keyname {string}
        set ddns-server-ip {ipv4-address}
        set ddns-ttl {integer}
        set ddns-update [disable|enable]
        set ddns-update-override [disable|enable]
        set ddns-zone {string}
        set default-gateway {ipv4-address}
        set dhcp-settings-from-fortiipam [disable|enable]
        set dns-server1 {ipv4-address}
        set dns-server2 {ipv4-address}
        set dns-server3 {ipv4-address}
        set dns-server4 {ipv4-address}
        set dns-service [local|default|...]
        set domain {string}
        config exclude-range
            Description: Exclude one or more ranges of IP addresses from being assigned to clients.
            edit <id>
                set start-ip {ipv4-address}
                set end-ip {ipv4-address}
                set vci-match [disable|enable]
                set vci-string <vci-string1>, <vci-string2>, ...
                set uci-match [disable|enable]
                set uci-string <uci-string1>, <uci-string2>, ...
                set lease-time {integer}
            next
        end
        set filename {string}
        set forticlient-on-net-status [disable|enable]
        set interface {string}
        set ip-mode [range|usrgrp]
        config ip-range
            Description: DHCP IP range configuration.
            edit <id>
                set start-ip {ipv4-address}
                set end-ip {ipv4-address}
                set vci-match [disable|enable]
                set vci-string <vci-string1>, <vci-string2>, ...
                set uci-match [disable|enable]
                set uci-string <uci-string1>, <uci-string2>, ...
                set lease-time {integer}
            next
        end
        set ipsec-lease-hold {integer}
        set lease-time {integer}
        set mac-acl-default-action [assign|block]
        set netmask {ipv4-netmask}
        set next-server {ipv4-address}
        set ntp-server1 {ipv4-address}
        set ntp-server2 {ipv4-address}
        set ntp-server3 {ipv4-address}
        set ntp-service [local|default|...]
        config options
            Description: DHCP options.
            edit <id>
                set code {integer}
                set type [hex|string|...]
                set value {string}
                set ip {user}
                set vci-match [disable|enable]
                set vci-string <vci-string1>, <vci-string2>, ...
                set uci-match [disable|enable]
                set uci-string <uci-string1>, <uci-string2>, ...
            next
        end
        set relay-agent {ipv4-address}
        config reserved-address
            Description: Options for the DHCP server to assign IP settings to specific MAC addresses.
            edit <id>
                set type [mac|option82]
                set ip {ipv4-address}
                set mac {mac-address}
                set action [assign|block|...]
                set circuit-id-type [hex|string]
                set circuit-id {string}
                set remote-id-type [hex|string]
                set remote-id {string}
                set description {var-string}
            next
        end
        set server-type [regular|ipsec]
        set shared-subnet [disable|enable]
        set status [disable|enable]
        set tftp-server <tftp-server1>, <tftp-server2>, ...
        set timezone [01|02|...]
        set timezone-option [disable|default|...]
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

+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                    | Description                       | Type               | Size               | Default            |
+==============================+===================================+====================+====================+====================+
| auto-configuration           | Enable/disable auto               | option             | \-                 | enable             |
|                              | configuration.                    |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *disable*   | Disable auto configuration.                            |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *enable*    | Enable auto configuration.                             |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| auto-managed-status          | Enable/disable use of this DHCP   | option             | \-                 | enable             |
|                              | server once this interface has    |                    |                    |                    |
|                              | been assigned an IP address from  |                    |                    |                    |
|                              | FortiIPAM.                        |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *disable*   | Disable use of this DHCP server once this interface    |                         |
|                              | |             | has been assigned an IP address from FortiIPAM.        |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *enable*    | Enable use of this DHCP server once this interface has |                         |
|                              | |             | been assigned an IP address from FortiIPAM.            |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| conflicted-ip-timeout        | Time in seconds to wait after a   | integer            | Minimum value: 60  | 1800               |
|                              | conflicted IP address is removed  |                    | Maximum value:     |                    |
|                              | from the DHCP range before it can |                    | 8640000            |                    |
|                              | be reused.                        |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ddns-auth                    | DDNS authentication mode.         | option             | \-                 | disable            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *disable*   | Disable DDNS authentication.                           |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *tsig*      | TSIG based on RFC2845.                                 |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ddns-key                     | DDNS update key (base 64          | password_aes256    | Not Specified      |                    |
|                              | encoding).                        |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ddns-keyname                 | DDNS update key name.             | string             | Maximum length: 64 |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ddns-server-ip               | DDNS server IP.                   | ipv4-address       | Not Specified      | 0.0.0.0            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ddns-ttl                     | TTL.                              | integer            | Minimum value: 60  | 300                |
|                              |                                   |                    | Maximum value:     |                    |
|                              |                                   |                    | 86400              |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ddns-update                  | Enable/disable DDNS update for    | option             | \-                 | disable            |
|                              | DHCP.                             |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *disable*   | Disable DDNS update for DHCP.                          |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *enable*    | Enable DDNS update for DHCP.                           |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ddns-update-override         | Enable/disable DDNS update        | option             | \-                 | disable            |
|                              | override for DHCP.                |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *disable*   | Disable DDNS update override for DHCP.                 |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *enable*    | Enable DDNS update override for DHCP.                  |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ddns-zone                    | Zone of your domain name (ex.     | string             | Maximum length: 64 |                    |
|                              | DDNS.com).                        |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| default-gateway              | Default gateway IP address        | ipv4-address       | Not Specified      | 0.0.0.0            |
|                              | assigned by the DHCP server.      |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dhcp-settings-from-fortiipam | Enable/disable populating of DHCP | option             | \-                 | disable            |
|                              | server settings from FortiIPAM.   |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *disable*   | Disable populating of DHCP server settings from        |                         |
|                              | |             | FortiIPAM.                                             |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *enable*    | Enable populating of DHCP server settings from         |                         |
|                              | |             | FortiIPAM.                                             |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dns-server1                  | DNS server 1.                     | ipv4-address       | Not Specified      | 0.0.0.0            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dns-server2                  | DNS server 2.                     | ipv4-address       | Not Specified      | 0.0.0.0            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dns-server3                  | DNS server 3.                     | ipv4-address       | Not Specified      | 0.0.0.0            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dns-server4                  | DNS server 4.                     | ipv4-address       | Not Specified      | 0.0.0.0            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dns-service                  | Options for assigning DNS servers | option             | \-                 | specify            |
|                              | to DHCP clients.                  |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *local*     | IP address of the interface the DHCP server is added   |                         |
|                              | |             | to becomes the client\'s DNS server IP address.        |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *default*   | Clients are assigned the FortiGate\'s configured DNS   |                         |
|                              | |             | servers.                                               |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *specify*   | Specify up to 3 DNS servers in the DHCP server         |                         |
|                              | |             | configuration.                                         |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| domain                       | Domain name suffix for the IP     | string             | Maximum length: 35 |                    |
|                              | addresses that the DHCP server    |                    |                    |                    |
|                              | assigns to clients.               |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| filename                     | Name of the boot file on the TFTP | string             | Maximum length:    |                    |
|                              | server.                           |                    | 127                |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| forticlient-on-net-status    | Enable/disable FortiClient-On-Net | option             | \-                 | enable             |
|                              | service for this DHCP server.     |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *disable*   | Disable FortiClient On-Net Status.                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *enable*    | Enable FortiClient On-Net Status.                      |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| id                           | ID.                               | integer            | Minimum value: 0   | 0                  |
|                              |                                   |                    | Maximum value:     |                    |
|                              |                                   |                    | 4294967295         |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface                    | DHCP server can assign IP         | string             | Maximum length: 15 |                    |
|                              | configurations to clients         |                    |                    |                    |
|                              | connected to this interface.      |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip-mode                      | Method used to assign client IP.  | option             | \-                 | range              |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *range*     | Use range defined by start-ip/end-ip to assign client  |                         |
|                              | |             | IP.                                                    |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *usrgrp*    | Use user-group defined method to assign client IP.     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ipsec-lease-hold             | DHCP over IPsec leases expire     | integer            | Minimum value: 0   | 60                 |
|                              | this many seconds after tunnel    |                    | Maximum value:     |                    |
|                              | down (0 to disable                |                    | 8640000            |                    |
|                              | forced-expiry).                   |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| lease-time                   | Lease time in seconds, 0 means    | integer            | Minimum value: 300 | 604800             |
|                              | unlimited.                        |                    | Maximum value:     |                    |
|                              |                                   |                    | 8640000            |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| mac-acl-default-action       | MAC access control default action | option             | \-                 | assign             |
|                              | (allow or block assigning IP      |                    |                    |                    |
|                              | settings).                        |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *assign*    | Allow the DHCP server to assign IP settings to clients |                         |
|                              | |             | on the MAC access control list.                        |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *block*     | Block the DHCP server from assigning IP settings to    |                         |
|                              | |             | clients on the MAC access control list.                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| netmask                      | Netmask assigned by the DHCP      | ipv4-netmask       | Not Specified      | 0.0.0.0            |
|                              | server.                           |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| next-server                  | IP address of a server (for       | ipv4-address       | Not Specified      | 0.0.0.0            |
|                              | example, a TFTP sever) that DHCP  |                    |                    |                    |
|                              | clients can download a boot file  |                    |                    |                    |
|                              | from.                             |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ntp-server1                  | NTP server 1.                     | ipv4-address       | Not Specified      | 0.0.0.0            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ntp-server2                  | NTP server 2.                     | ipv4-address       | Not Specified      | 0.0.0.0            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ntp-server3                  | NTP server 3.                     | ipv4-address       | Not Specified      | 0.0.0.0            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ntp-service                  | Options for assigning Network     | option             | \-                 | specify            |
|                              | Time Protocol (NTP) servers to    |                    |                    |                    |
|                              | DHCP clients.                     |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *local*     | IP address of the interface the DHCP server is added   |                         |
|                              | |             | to becomes the client\'s NTP server IP address.        |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *default*   | Clients are assigned the FortiGate\'s configured NTP   |                         |
|                              | |             | servers.                                               |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *specify*   | Specify up to 3 NTP servers in the DHCP server         |                         |
|                              | |             | configuration.                                         |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| relay-agent                  | Relay agent IP.                   | ipv4-address       | Not Specified      | 0.0.0.0            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server-type                  | DHCP server can be a normal DHCP  | option             | \-                 | regular            |
|                              | server or an IPsec DHCP server.   |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *regular*   | Regular DHCP service.                                  |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *ipsec*     | DHCP over IPsec service.                               |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| shared-subnet                | Enable/disable shared subnet.     | option             | \-                 | disable            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *disable*   | Disable shared subnet.                                 |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *enable*    | Enable shared subnet.                                  |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status                       | Enable/disable this DHCP          | option             | \-                 | enable             |
|                              | configuration.                    |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *disable*   | Do not use this DHCP server configuration.             |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *enable*    | Use this DHCP server configuration.                    |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tftp-server `<tftp-server>`  | One or more hostnames or IP       | string             | Maximum length: 63 |                    |
|                              | addresses of the TFTP servers in  |                    |                    |                    |
|                              | quotes separated by spaces.       |                    |                    |                    |
|                              |                                   |                    |                    |                    |
|                              | TFTP server.                      |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| timezone                     | Select the time zone to be        | option             | \-                 | 00                 |
|                              | assigned to DHCP clients.         |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *01*        | (GMT-11:00) Midway Island, Samoa                       |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *02*        | (GMT-10:00) Hawaii                                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *03*        | (GMT-9:00) Alaska                                      |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *04*        | (GMT-8:00) Pacific Time (US & Canada)                  |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *05*        | (GMT-7:00) Arizona                                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *81*        | (GMT-7:00) Baja California Sur, Chihuahua              |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *06*        | (GMT-7:00) Mountain Time (US & Canada)                 |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *07*        | (GMT-6:00) Central America                             |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *08*        | (GMT-6:00) Central Time (US & Canada)                  |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *09*        | (GMT-6:00) Mexico City                                 |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *10*        | (GMT-6:00) Saskatchewan                                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *11*        | (GMT-5:00) Bogota, Lima,Quito                          |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *12*        | (GMT-5:00) Eastern Time (US & Canada)                  |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *13*        | (GMT-5:00) Indiana (East)                              |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *74*        | (GMT-4:00) Caracas                                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *14*        | (GMT-4:00) Atlantic Time (Canada)                      |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *77*        | (GMT-4:00) Georgetown                                  |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *15*        | (GMT-4:00) La Paz                                      |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *87*        | (GMT-4:00) Paraguay                                    |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *16*        | (GMT-3:00) Santiago                                    |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *17*        | (GMT-3:30) Newfoundland                                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *18*        | (GMT-3:00) Brasilia                                    |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *19*        | (GMT-3:00) Buenos Aires                                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *20*        | (GMT-3:00) Nuuk (Greenland)                            |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *75*        | (GMT-3:00) Uruguay                                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *21*        | (GMT-2:00) Mid-Atlantic                                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *22*        | (GMT-1:00) Azores                                      |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *23*        | (GMT-1:00) Cape Verde Is.                              |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *24*        | (GMT) Monrovia                                         |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *80*        | (GMT) Greenwich Mean Time                              |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *79*        | (GMT) Casablanca                                       |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *25*        | (GMT) Dublin, Edinburgh, Lisbon, London, Canary Is.    |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *26*        | (GMT+1:00) Amsterdam, Berlin, Bern, Rome, Stockholm,   |                         |
|                              | |             | Vienna                                                 |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *27*        | (GMT+1:00) Belgrade, Bratislava, Budapest, Ljubljana,  |                         |
|                              | |             | Prague                                                 |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *28*        | (GMT+1:00) Brussels, Copenhagen, Madrid, Paris         |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *78*        | (GMT+1:00) Namibia                                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *29*        | (GMT+1:00) Sarajevo, Skopje, Warsaw, Zagreb            |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *30*        | (GMT+1:00) West Central Africa                         |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *31*        | (GMT+2:00) Kyiv, Athens, Sofia, Vilnius                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *32*        | (GMT+2:00) Bucharest                                   |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *33*        | (GMT+2:00) Cairo                                       |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *34*        | (GMT+2:00) Harare, Pretoria                            |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *35*        | (GMT+2:00) Helsinki, Riga, Tallinn                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *36*        | (GMT+2:00) Jerusalem                                   |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *37*        | (GMT+3:00) Baghdad                                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *38*        | (GMT+3:00) Kuwait, Riyadh                              |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *83*        | (GMT+3:00) Moscow                                      |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *84*        | (GMT+3:00) Minsk                                       |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *40*        | (GMT+3:00) Nairobi                                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *85*        | (GMT+3:00) Istanbul                                    |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *39*        | (GMT+3:00) St. Petersburg, Volgograd                   |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *41*        | (GMT+3:30) Tehran                                      |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *42*        | (GMT+4:00) Abu Dhabi, Muscat                           |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *43*        | (GMT+4:00) Baku                                        |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *44*        | (GMT+4:30) Kabul                                       |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *45*        | (GMT+5:00) Ekaterinburg                                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *46*        | (GMT+5:00) Islamabad, Karachi, Tashkent                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *47*        | (GMT+5:30) Kolkata, Chennai, Mumbai, New Delhi         |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *51*        | (GMT+5:30) Sri Jayawardenepara                         |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *48*        | (GMT+5:45) Kathmandu                                   |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *49*        | (GMT+6:00) Almaty, Novosibirsk                         |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *50*        | (GMT+6:00) Astana, Dhaka                               |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *52*        | (GMT+6:30) Rangoon                                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *53*        | (GMT+7:00) Bangkok, Hanoi, Jakarta                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *54*        | (GMT+7:00) Krasnoyarsk                                 |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *55*        | (GMT+8:00) Beijing, ChongQing, HongKong, Urumgi,       |                         |
|                              | |             | Irkutsk                                                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *56*        | (GMT+8:00) Ulaan Bataar                                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *57*        | (GMT+8:00) Kuala Lumpur, Singapore                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *58*        | (GMT+8:00) Perth                                       |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *59*        | (GMT+8:00) Taipei                                      |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *60*        | (GMT+9:00) Osaka, Sapporo, Tokyo, Seoul                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *61*        | (GMT+9:00) Yakutsk                                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *62*        | (GMT+9:30) Adelaide                                    |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *63*        | (GMT+9:30) Darwin                                      |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *64*        | (GMT+10:00) Brisbane                                   |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *65*        | (GMT+10:00) Canberra, Melbourne, Sydney                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *66*        | (GMT+10:00) Guam, Port Moresby                         |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *67*        | (GMT+10:00) Hobart                                     |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *68*        | (GMT+10:00) Vladivostok                                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *69*        | (GMT+10:00) Magadan                                    |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *70*        | (GMT+11:00) Solomon Is., New Caledonia                 |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *71*        | (GMT+12:00) Auckland, Wellington                       |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *72*        | (GMT+12:00) Fiji, Kamchatka, Marshall Is.              |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *00*        | (GMT+12:00) Eniwetok, Kwajalein                        |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *82*        | (GMT+12:45) Chatham Islands                            |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *73*        | (GMT+13:00) Nuku\'alofa                                |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *86*        | (GMT+13:00) Samoa                                      |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *76*        | (GMT+14:00) Kiritimati                                 |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| timezone-option              | Options for the DHCP server to    | option             | \-                 | disable            |
|                              | set the client\'s time zone.      |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *disable*   | Do not set the client\'s time zone.                    |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *default*   | Clients are assigned the FortiGate\'s configured time  |                         |
|                              | |             | zone.                                                  |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *specify*   | Specify the time zone to be assigned to DHCP clients.  |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vci-match                    | Enable/disable vendor class       | option             | \-                 | disable            |
|                              | identifier (VCI) matching. When   |                    |                    |                    |
|                              | enabled only DHCP requests with a |                    |                    |                    |
|                              | matching VCI are served.          |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *disable*   | Disable VCI matching.                                  |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *enable*    | Enable VCI matching.                                   |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vci-string `<vci-string>`    | One or more VCI strings in quotes | string             | Maximum length:    |                    |
|                              | separated by spaces.              |                    | 255                |                    |
|                              |                                   |                    |                    |                    |
|                              | VCI strings.                      |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wifi-ac-service              | Options for assigning WiFi access | option             | \-                 | specify            |
|                              | controllers to DHCP clients.      |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | Option      | Description                                            |                         |
|                              | +=============+========================================================+                         |
|                              | | *specify*   | Specify up to 3 WiFi Access Controllers in the DHCP    |                         |
|                              | |             | server configuration.                                  |                         |
|                              | +-------------+--------------------------------------------------------+                         |
|                              | | *local*     | IP address of the interface the DHCP server is added   |                         |
|                              | |             | to becomes the client\'s WiFi Access Controller IP     |                         |
|                              | |             | address.                                               |                         |
|                              | +-------------+--------------------------------------------------------+                         |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wifi-ac1                     | WiFi Access Controller 1 IP       | ipv4-address       | Not Specified      | 0.0.0.0            |
|                              | address (DHCP option 138, RFC     |                    |                    |                    |
|                              | 5417).                            |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wifi-ac2                     | WiFi Access Controller 2 IP       | ipv4-address       | Not Specified      | 0.0.0.0            |
|                              | address (DHCP option 138, RFC     |                    |                    |                    |
|                              | 5417).                            |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wifi-ac3                     | WiFi Access Controller 3 IP       | ipv4-address       | Not Specified      | 0.0.0.0            |
|                              | address (DHCP option 138, RFC     |                    |                    |                    |
|                              | 5417).                            |                    |                    |                    |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wins-server1                 | WINS server 1.                    | ipv4-address       | Not Specified      | 0.0.0.0            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wins-server2                 | WINS server 2.                    | ipv4-address       | Not Specified      | 0.0.0.0            |
+------------------------------+-----------------------------------+--------------------+--------------------+--------------------+

