# config system vdom-netflow

Configure NetFlow per VDOM.

## Syntax

```
config system vdom-netflow
    Description: Configure NetFlow per VDOM.
    config collectors
        Description: Netflow collectors.
        edit <id>
            set collector-ip {string}
            set collector-port {integer}
            set source-ip {string}
            set interface-select-method [auto|sdwan|...]
            set interface {string}
        next
    end
    set vdom-netflow [enable|disable]
end
```

## Parameters

+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter    | Description                       | Type               | Size               | Default            |
+==============+===================================+====================+====================+====================+
| vdom-netflow | Enable/disable NetFlow per VDOM.  | option             | \-                 | disable            |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
|              | +-------------+--------------------------------------------------------+                         |
|              | | Option      | Description                                            |                         |
|              | +=============+========================================================+                         |
|              | | *enable*    | Enable NetFlow per VDOM.                               |                         |
|              | +-------------+--------------------------------------------------------+                         |
|              | | *disable*   | Disable NetFlow per VDOM.                              |                         |
|              | +-------------+--------------------------------------------------------+                         |
+--------------+--------------------------------------------------------------------------------------------------+

