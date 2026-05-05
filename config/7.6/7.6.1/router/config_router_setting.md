# config router setting

Configure router settings.

## Syntax

```
config router setting
    Description: Configure router settings.
    set hostname {string}
    set kernel-route-distance {integer}
    set show-filter {string}
end
```

## Parameters

+-----------------------+-----------------------------------+---------+---------+---------+
| Parameter             | Description                       | Type    | Size    | Default |
+=======================+===================================+=========+=========+=========+
| hostname              | Hostname for this virtual domain  | string  | Maximum |         |
|                       | router.                           |         | length: |         |
|                       |                                   |         | 14      |         |
+-----------------------+-----------------------------------+---------+---------+---------+
| kernel-route-distance | Administrative distance for       | integer | Minimum | 255     |
|                       | routes learned from kernel.       |         | value:  |         |
|                       |                                   |         | 0       |         |
|                       |                                   |         | Maximum |         |
|                       |                                   |         | value:  |         |
|                       |                                   |         | 255     |         |
+-----------------------+-----------------------------------+---------+---------+---------+
| show-filter           | Prefix-list as filter for showing | string  | Maximum |         |
|                       | routes.                           |         | length: |         |
|                       |                                   |         | 35      |         |
+-----------------------+-----------------------------------+---------+---------+---------+

