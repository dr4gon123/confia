# config system proxy-arp

Configure proxy-ARP.

## Syntax

```
config system proxy-arp
    Description: Configure proxy-ARP.
    edit <id>
        set end-ip {ipv4-address}
        set interface {string}
        set ip {ipv4-address}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------+------------+---------+
| Parameter | Description                       | Type         | Size       | Default |
+===========+===================================+==============+============+=========+
| end-ip    | End IP of IP range to be proxied. | ipv4-address | Not        | 0.0.0.0 |
|           |                                   |              | Specified  |         |
+-----------+-----------------------------------+--------------+------------+---------+
| id        | Unique integer ID of the entry.   | integer      | Minimum    | 0       |
|           |                                   |              | value: 0   |         |
|           |                                   |              | Maximum    |         |
|           |                                   |              | value:     |         |
|           |                                   |              | 4294967295 |         |
+-----------+-----------------------------------+--------------+------------+---------+
| interface | Interface acting proxy-ARP.       | string       | Maximum    |         |
|           |                                   |              | length: 15 |         |
+-----------+-----------------------------------+--------------+------------+---------+
| ip        | IP address or start IP to be      | ipv4-address | Not        | 0.0.0.0 |
|           | proxied.                          |              | Specified  |         |
+-----------+-----------------------------------+--------------+------------+---------+

