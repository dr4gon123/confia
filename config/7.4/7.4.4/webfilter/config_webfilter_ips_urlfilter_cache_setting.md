# config webfilter ips-urlfilter-cache-setting

Configure IPS URL filter cache settings.

## Syntax

```
config webfilter ips-urlfilter-cache-setting
    Description: Configure IPS URL filter cache settings.
    set dns-retry-interval {integer}
    set extended-ttl {integer}
end
```

## Parameters

+--------------------+-----------------------------------+---------+---------+---------+
| Parameter          | Description                       | Type    | Size    | Default |
+====================+===================================+=========+=========+=========+
| dns-retry-interval | Retry interval. Refresh DNS       | integer | Minimum | 0       |
|                    | faster than TTL to capture        |         | value:  |         |
|                    | multiple IPs for hosts. 0 means   |         | 0       |         |
|                    | use DNS server\'s TTL only.       |         | Maximum |         |
|                    |                                   |         | value:  |         |
|                    |                                   |         | 2147483 |         |
+--------------------+-----------------------------------+---------+---------+---------+
| extended-ttl       | Extend time to live beyond        | integer | Minimum | 0       |
|                    | reported by DNS. Use of 0 means   |         | value:  |         |
|                    | use DNS server\'s TTL.            |         | 0       |         |
|                    |                                   |         | Maximum |         |
|                    |                                   |         | value:  |         |
|                    |                                   |         | 2147483 |         |
+--------------------+-----------------------------------+---------+---------+---------+

