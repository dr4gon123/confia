# config system npu-setting prp

Configure NPU PRP attributes.

## Syntax

```
config system npu-setting prp
    Description: Configure NPU PRP attributes.
    set prp-port-in <interface-name1>, <interface-name2>, ...
    set prp-port-out <interface-name1>, <interface-name2>, ...
end
```

## Parameters

+--------------------+-----------------------------------+--------+---------+---------+
| Parameter          | Description                       | Type   | Size    | Default |
+====================+===================================+========+=========+=========+
| prp-port-in        | Ingress port configured to allow  | string | Maximum |         |
| `<interface-name>` | the PRP trailer not be stripped   |        | length: |         |
|                    | off when the PRP packets come in. |        | 35      |         |
|                    | All of the traffic originating    |        |         |         |
|                    | from these ports will always be   |        |         |         |
|                    | sent to the host.                 |        |         |         |
|                    |                                   |        |         |         |
|                    | Physical interface name.          |        |         |         |
+--------------------+-----------------------------------+--------+---------+---------+
| prp-port-out       | Egress port configured to allow   | string | Maximum |         |
| `<interface-name>` | the PRP trailer not be stripped   |        | length: |         |
|                    | off when the PRP packets go out.  |        | 35      |         |
|                    |                                   |        |         |         |
|                    | Physical interface name.          |        |         |         |
+--------------------+-----------------------------------+--------+---------+---------+

