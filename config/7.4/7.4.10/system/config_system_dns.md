# config system dns

Configure DNS.

## Syntax

```
config system dns
    Description: Configure DNS.
    set alt-primary {ipv4-address}
    set alt-secondary {ipv4-address}
    set cache-notfound-responses [disable|enable]
    set dns-cache-limit {integer}
    set dns-cache-ttl {integer}
    set domain <domain1>, <domain2>, ...
    set fqdn-cache-ttl {integer}
    set fqdn-max-refresh {integer}
    set fqdn-min-refresh {integer}
    set interface {string}
    set interface-select-method [auto|sdwan|...]
    set ip6-primary {ipv6-address}
    set ip6-secondary {ipv6-address}
    set log [disable|error|...]
    set primary {ipv4-address}
    set protocol {option1}, {option2}, ...
    set retry {integer}
    set secondary {ipv4-address}
    set server-hostname <hostname1>, <hostname2>, ...
    set server-select-method [least-rtt|failover]
    set source-ip {ipv4-address}
    set ssl-certificate {string}
    set timeout {integer}
end
```

## Parameters

+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                | Description                       | Type               | Size               | Default            |
+==========================+===================================+====================+====================+====================+
| alt-primary              | Alternate primary DNS server.     | ipv4-address       | Not Specified      | 0.0.0.0            |
|                          | This is not used as a failover    |                    |                    |                    |
|                          | DNS server.                       |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| alt-secondary            | Alternate secondary DNS server.   | ipv4-address       | Not Specified      | 0.0.0.0            |
|                          | This is not used as a failover    |                    |                    |                    |
|                          | DNS server.                       |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cache-notfound-responses | Enable/disable response from the  | option             | \-                 | disable            |
|                          | DNS server when a record is not   |                    |                    |                    |
|                          | in cache.                         |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *disable*   | Disable cache NOTFOUND responses from DNS server.      |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *enable*    | Enable cache NOTFOUND responses from DNS server.       |                         |
|                          | +-------------+--------------------------------------------------------+                         |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dns-cache-limit          | Maximum number of records in the  | integer            | Minimum value: 0   | 5000               |
|                          | DNS cache.                        |                    | Maximum value:     |                    |
|                          |                                   |                    | 4294967295         |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dns-cache-ttl            | Duration in seconds that the DNS  | integer            | Minimum value: 60  | 1800               |
|                          | cache retains information.        |                    | Maximum value:     |                    |
|                          |                                   |                    | 86400              |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| domain `<domain>`        | Search suffix list for hostname   | string             | Maximum length:    |                    |
|                          | lookup.                           |                    | 127                |                    |
|                          |                                   |                    |                    |                    |
|                          | DNS search domain list separated  |                    |                    |                    |
|                          | by space (maximum 8 domains).     |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fqdn-cache-ttl           | FQDN cache time to live in        | integer            | Minimum value: 0   | 0                  |
|                          | seconds (0 - 86400, default = 0). |                    | Maximum value:     |                    |
|                          |                                   |                    | 86400              |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fqdn-max-refresh         | FQDN cache maximum refresh time   | integer            | Minimum value:     | 3600               |
|                          | in seconds (3600 - 86400, default |                    | 3600 Maximum       |                    |
|                          | = 3600).                          |                    | value: 86400       |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fqdn-min-refresh         | FQDN cache minimum refresh time   | integer            | Minimum value: 10  | 60                 |
|                          | in seconds (10 - 3600, default =  |                    | Maximum value:     |                    |
|                          | 60).                              |                    | 3600               |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface                | Specify outgoing interface to     | string             | Maximum length: 15 |                    |
|                          | reach server.                     |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface-select-method  | Specify how to select outgoing    | option             | \-                 | auto               |
|                          | interface to reach server.        |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *auto*      | Set outgoing interface automatically.                  |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                         |
|                          | |             | rules.                                                 |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *specify*   | Set outgoing interface manually.                       |                         |
|                          | +-------------+--------------------------------------------------------+                         |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-primary              | Primary DNS server IPv6 address.  | ipv6-address       | Not Specified      | ::                 |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-secondary            | Secondary DNS server IPv6         | ipv6-address       | Not Specified      | ::                 |
|                          | address.                          |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| log                      | Local DNS log setting.            | option             | \-                 | disable            |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *disable*   | Disable.                                               |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *error*     | Enable local DNS error log.                            |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *all*       | Enable local DNS log.                                  |                         |
|                          | +-------------+--------------------------------------------------------+                         |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| primary                  | Primary DNS server IP address.    | ipv4-address       | Not Specified      | 0.0.0.0            |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| protocol                 | DNS transport protocols.          | option             | \-                 | cleartext          |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *cleartext* | DNS over UDP/53, DNS over TCP/53.                      |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *dot*       | DNS over TLS/853.                                      |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *doh*       | DNS over HTTPS/443.                                    |                         |
|                          | +-------------+--------------------------------------------------------+                         |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| retry                    | Number of times to retry (0 - 5). | integer            | Minimum value: 0   | 2                  |
|                          |                                   |                    | Maximum value: 5   |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| secondary                | Secondary DNS server IP address.  | ipv4-address       | Not Specified      | 0.0.0.0            |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server-hostname          | DNS server host name list.        | string             | Maximum length:    |                    |
| `<hostname>`             |                                   |                    | 127                |                    |
|                          | DNS server host name list         |                    |                    |                    |
|                          | separated by space (maximum 4     |                    |                    |                    |
|                          | domains).                         |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server-select-method     | Specify how configured servers    | option             | \-                 | least-rtt          |
|                          | are prioritized.                  |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | Option      | Description                                            |                         |
|                          | +=============+========================================================+                         |
|                          | | *least-rtt* | Select servers based on least round trip time.         |                         |
|                          | +-------------+--------------------------------------------------------+                         |
|                          | | *failover*  | Select servers based on the order they are configured. |                         |
|                          | +-------------+--------------------------------------------------------+                         |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip                | IP address used by the DNS server | ipv4-address       | Not Specified      | 0.0.0.0            |
|                          | as its source IP.                 |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ssl-certificate          | Name of local certificate for SSL | string             | Maximum length: 35 | Fortinet_Factory   |
|                          | connections.                      |                    |                    |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| timeout                  | DNS query timeout interval in     | integer            | Minimum value: 1   | 5                  |
|                          | seconds (1 - 10).                 |                    | Maximum value: 10  |                    |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------+

