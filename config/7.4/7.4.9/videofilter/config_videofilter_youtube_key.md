# config videofilter youtube-key

Configure YouTube API keys.

## Syntax

```
config videofilter youtube-key
    Description: Configure YouTube API keys.
    edit <id>
        set key {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+---------+------------+---------+
| Parameter | Description                       | Type    | Size       | Default |
+===========+===================================+=========+============+=========+
| id        | ID.                               | integer | Minimum    | 0       |
|           |                                   |         | value: 0   |         |
|           |                                   |         | Maximum    |         |
|           |                                   |         | value:     |         |
|           |                                   |         | 4294967295 |         |
+-----------+-----------------------------------+---------+------------+---------+
| key       | Key.                              | string  | Maximum    |         |
|           |                                   |         | length: 47 |         |
+-----------+-----------------------------------+---------+------------+---------+

