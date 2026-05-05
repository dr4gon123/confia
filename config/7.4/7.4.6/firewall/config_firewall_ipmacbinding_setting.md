# config firewall ipmacbinding setting

Configure IP to MAC binding settings.

## Syntax

```
config firewall ipmacbinding setting
    Description: Configure IP to MAC binding settings.
    set bindthroughfw [enable|disable]
    set bindtofw [enable|disable]
    set undefinedhost [allow|block]
end
```

## Parameters

+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter     | Description                       | Type               | Size               | Default            |
+===============+===================================+====================+====================+====================+
| bindthroughfw | Enable/disable use of IP/MAC      | option             | \-                 | disable            |
|               | binding to filter packets that    |                    |                    |                    |
|               | would normally go through the     |                    |                    |                    |
|               | firewall.                         |                    |                    |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
|               | +-------------+--------------------------------------------------------+                         |
|               | | Option      | Description                                            |                         |
|               | +=============+========================================================+                         |
|               | | *enable*    | Enable IP/MAC binding for packets that would normally  |                         |
|               | |             | go through the firewall.                               |                         |
|               | +-------------+--------------------------------------------------------+                         |
|               | | *disable*   | Disable IP/MAC binding for packets that would normally |                         |
|               | |             | go through the firewall.                               |                         |
|               | +-------------+--------------------------------------------------------+                         |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| bindtofw      | Enable/disable use of IP/MAC      | option             | \-                 | disable            |
|               | binding to filter packets that    |                    |                    |                    |
|               | would normally go to the          |                    |                    |                    |
|               | firewall.                         |                    |                    |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
|               | +-------------+--------------------------------------------------------+                         |
|               | | Option      | Description                                            |                         |
|               | +=============+========================================================+                         |
|               | | *enable*    | Enable IP/MAC binding for packets that would normally  |                         |
|               | |             | go to the firewall.                                    |                         |
|               | +-------------+--------------------------------------------------------+                         |
|               | | *disable*   | Disable IP/MAC binding for packets that would normally |                         |
|               | |             | go to the firewall.                                    |                         |
|               | +-------------+--------------------------------------------------------+                         |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| undefinedhost | Select action to take on packets  | option             | \-                 | block              |
|               | with IP/MAC addresses not in the  |                    |                    |                    |
|               | binding list.                     |                    |                    |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
|               | +-------------+--------------------------------------------------------+                         |
|               | | Option      | Description                                            |                         |
|               | +=============+========================================================+                         |
|               | | *allow*     | Allow packets from MAC addresses not in the IP/MAC     |                         |
|               | |             | list.                                                  |                         |
|               | +-------------+--------------------------------------------------------+                         |
|               | | *block*     | Block packets from MAC addresses not in the IP/MAC     |                         |
|               | |             | list.                                                  |                         |
|               | +-------------+--------------------------------------------------------+                         |
+---------------+--------------------------------------------------------------------------------------------------+

