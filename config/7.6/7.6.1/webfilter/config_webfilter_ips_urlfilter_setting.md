# config webfilter ips-urlfilter-setting

Configure IPS URL filter settings.

## Syntax

```
config webfilter ips-urlfilter-setting
    Description: Configure IPS URL filter settings.
    set device {string}
    set distance {integer}
    set gateway {ipv4-address}
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
| distance   | Administrative distance for this  | integer      | Minimum   | 1       |
|            | route.                            |              | value: 1  |         |
|            |                                   |              | Maximum   |         |
|            |                                   |              | value:    |         |
|            |                                   |              | 255       |         |
+------------+-----------------------------------+--------------+-----------+---------+
| gateway    | Gateway IP address for this       | ipv4-address | Not       | 0.0.0.0 |
|            | route.                            |              | Specified |         |
+------------+-----------------------------------+--------------+-----------+---------+
| geo-filter | Filter based on geographical      | var-string   | Maximum   |         |
|            | location. Route will NOT be       |              | length:   |         |
|            | installed if the resolved IP      |              | 255       |         |
|            | address belongs to the country in |              |           |         |
|            | the filter.                       |              |           |         |
+------------+-----------------------------------+--------------+-----------+---------+

