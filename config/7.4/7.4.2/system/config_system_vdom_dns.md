# config system vdom-dns

Configure DNS servers for a non-management VDOM.

## Syntax

```
config system vdom-dns
    Description: Configure DNS servers for a non-management VDOM.
    set alt-primary {ipv4-address}
    set alt-secondary {ipv4-address}
    set interface {string}
    set interface-select-method [auto|sdwan|...]
    set ip6-primary {ipv6-address}
    set ip6-secondary {ipv6-address}
    set primary {ipv4-address}
    set protocol {option1}, {option2}, ...
    set secondary {ipv4-address}
    set server-hostname <hostname1>, <hostname2>, ...
    set server-select-method [least-rtt|failover]
    set source-ip {ipv4-address}
    set ssl-certificate {string}
    set vdom-dns [enable|disable]
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| alt-primary             | Alternate primary DNS server.     | ipv4-address       | Not Specified      | 0.0.0.0            |
|                         | This is not used as a failover    |                    |                    |                    |
|                         | DNS server.                       |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| alt-secondary           | Alternate secondary DNS server.   | ipv4-address       | Not Specified      | 0.0.0.0            |
|                         | This is not used as a failover    |                    |                    |                    |
|                         | DNS server.                       |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface               | Specify outgoing interface to     | string             | Maximum length: 15 |                    |
|                         | reach server.                     |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface-select-method | Specify how to select outgoing    | option             | \-                 | auto               |
|                         | interface to reach server.        |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *auto*      | Set outgoing interface automatically.                  |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                         |
|                         | |             | rules.                                                 |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *specify*   | Set outgoing interface manually.                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-primary             | Primary IPv6 DNS server IP        | ipv6-address       | Not Specified      | ::                 |
|                         | address for the VDOM.             |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ip6-secondary           | Secondary IPv6 DNS server IP      | ipv6-address       | Not Specified      | ::                 |
|                         | address for the VDOM.             |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| primary                 | Primary DNS server IP address for | ipv4-address       | Not Specified      | 0.0.0.0            |
|                         | the VDOM.                         |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| protocol                | DNS transport protocols.          | option             | \-                 | cleartext          |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *cleartext* | DNS over UDP/53, DNS over TCP/53.                      |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *dot*       | DNS over TLS/853.                                      |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *doh*       | DNS over HTTPS/443.                                    |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| secondary               | Secondary DNS server IP address   | ipv4-address       | Not Specified      | 0.0.0.0            |
|                         | for the VDOM.                     |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server-hostname         | DNS server host name list.        | string             | Maximum length:    |                    |
| `<hostname>`            |                                   |                    | 127                |                    |
|                         | DNS server host name list         |                    |                    |                    |
|                         | separated by space (maximum 4     |                    |                    |                    |
|                         | domains).                         |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server-select-method    | Specify how configured servers    | option             | \-                 | least-rtt          |
|                         | are prioritized.                  |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *least-rtt* | Select servers based on least round trip time.         |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *failover*  | Select servers based on the order they are configured. |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip               | Source IP for communications with | ipv4-address       | Not Specified      | 0.0.0.0            |
|                         | the DNS server.                   |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ssl-certificate         | Name of local certificate for SSL | string             | Maximum length: 35 | Fortinet_Factory   |
|                         | connections.                      |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vdom-dns                | Enable/disable configuring DNS    | option             | \-                 | disable            |
|                         | servers for the current VDOM.     |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable configuring DNS servers for the current VDOM.   |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable configuring DNS servers for the current VDOM.  |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+--------------------------------------------------------------------------------------------------+

