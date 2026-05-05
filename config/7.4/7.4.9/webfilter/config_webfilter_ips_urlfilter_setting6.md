# config webfilter ips-urlfilter-setting6

Configure IPS URL filter settings for IPv6.

## Syntax

```
config webfilter ips-urlfilter-setting6
    Description: Configure IPS URL filter settings for IPv6.
    set device {string}
    set distance {integer}
    set gateway6 {ipv6-address}
    set geo-filter {var-string}
end
```

## Parameters

+------------+-----------------------------------+--------------+-----------+---------+
| Parameter  | Description                       | Type         | Size      | Default |
+============+===================================+==============+===========+=========+
| device     | Interface for this route.         | string       | Maximum   |         |
|            |                                   |              | length:   |         |
|            |                                   |              | 35        |         |
+------------+-----------------------------------+--------------+-----------+---------+
| distance   | Administrative distance (1 - 255) | integer      | Minimum   | 1       |
|            | for this route.                   |              | value: 1  |         |
|            |                                   |              | Maximum   |         |
|            |                                   |              | value:    |         |
|            |                                   |              | 255       |         |
+------------+-----------------------------------+--------------+-----------+---------+
| gateway6   | Gateway IPv6 address for this     | ipv6-address | Not       | ::      |
|            | route.                            |              | Specified |         |
+------------+-----------------------------------+--------------+-----------+---------+
| geo-filter | Filter based on geographical      | var-string   | Maximum   |         |
|            | location. Route will NOT be       |              | length:   |         |
|            | installed if the resolved IPv6    |              | 255       |         |
|            | address belongs to the country in |              |           |         |
|            | the filter.                       |              |           |         |
+------------+-----------------------------------+--------------+-----------+---------+

