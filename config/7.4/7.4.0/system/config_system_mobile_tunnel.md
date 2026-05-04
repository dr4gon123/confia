# config system mobile-tunnel

Configure Mobile tunnels, an implementation of Network Mobility (NEMO) extensions for Mobile IPv4 RFC5177.

## Syntax

```
config system mobile-tunnel
    Description: Configure Mobile tunnels, an implementation of Network Mobility (NEMO) extensions for Mobile IPv4 RFC5177.
    edit <name>
        set hash-algorithm {option}
        set home-address {ipv4-address}
        set home-agent {ipv4-address}
        set lifetime {integer}
        set n-mhae-key {password_aes256}
        set n-mhae-key-type [ascii|base64]
        set n-mhae-spi {integer}
        config network
            Description: NEMO network configuration.
            edit <id>
                set interface {string}
                set prefix {ipv4-classnet}
            next
        end
        set reg-interval {integer}
        set reg-retry {integer}
        set renew-interval {integer}
        set roaming-interface {string}
        set status [disable|enable]
        set tunnel-mode {option}
    next
end
```

## Parameters

+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter         | Description                       | Type               | Size               | Default            |
+===================+===================================+====================+====================+====================+
| hash-algorithm    | Hash Algorithm (Keyed MD5).       | option             | \-                 | hmac-md5           |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *hmac-md5*  | Keyed MD5.                                             |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| home-address      | Home IP address (Format:          | ipv4-address       | Not Specified      | 0.0.0.0            |
|                   | xxx.xxx.xxx.xxx).                 |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| home-agent        | IPv4 address of the NEMO HA       | ipv4-address       | Not Specified      | 0.0.0.0            |
|                   | (Format: xxx.xxx.xxx.xxx).        |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| lifetime          | NMMO HA registration request      | integer            | Minimum value: 180 | 65535              |
|                   | lifetime.                         |                    | Maximum value:     |                    |
|                   |                                   |                    | 65535              |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| n-mhae-key        | NEMO authentication key.          | password_aes256    | Not Specified      |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| n-mhae-key-type   | NEMO authentication key type      | option             | \-                 | ascii              |
|                   | (ASCII or base64).                |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *ascii*     | The authentication key is an ASCII string.             |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *base64*    | The authentication key is Base64 encoded.              |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| n-mhae-spi        | NEMO authentication SPI.          | integer            | Minimum value: 0   | 256                |
|                   |                                   |                    | Maximum value:     |                    |
|                   |                                   |                    | 4294967295         |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name              | Tunnel name.                      | string             | Maximum length: 15 |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| reg-interval      | NMMO HA registration interval.    | integer            | Minimum value: 5   | 5                  |
|                   |                                   |                    | Maximum value: 300 |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| reg-retry         | Maximum number of NMMO HA         | integer            | Minimum value: 1   | 3                  |
|                   | registration retries.             |                    | Maximum value: 30  |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| renew-interval    | Time before lifetime expiration   | integer            | Minimum value: 5   | 60                 |
|                   | to send NMMO HA re-registration.  |                    | Maximum value: 60  |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| roaming-interface | Select the associated interface   | string             | Maximum length: 15 |                    |
|                   | name from available options.      |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status            | Enable/disable this mobile        | option             | \-                 | enable             |
|                   | tunnel.                           |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *disable*   | Disable this mobile tunnel.                            |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *enable*    | Enable this mobile tunnel.                             |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tunnel-mode       | NEMO tunnel mode (GRE tunnel).    | option             | \-                 | gre                |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *gre*       | GRE tunnel.                                            |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+--------------------------------------------------------------------------------------------------+

