# config emailfilter options

Configure AntiSpam options.

## Syntax

```
config emailfilter options
    Description: Configure AntiSpam options.
    set dns-timeout {integer}
end
```

## Parameters

+-------------+-----------------------------------+---------+---------+---------+
| Parameter   | Description                       | Type    | Size    | Default |
+=============+===================================+=========+=========+=========+
| dns-timeout | DNS query time out.               | integer | Minimum | 7       |
|             |                                   |         | value:  |         |
|             |                                   |         | 1       |         |
|             |                                   |         | Maximum |         |
|             |                                   |         | value:  |         |
|             |                                   |         | 30      |         |
+-------------+-----------------------------------+---------+---------+---------+

