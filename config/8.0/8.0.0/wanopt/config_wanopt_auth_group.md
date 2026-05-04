# config wanopt auth-group

Configure WAN optimization authentication groups.

## Syntax

```
config wanopt auth-group
    Description: Configure WAN optimization authentication groups.
    edit <name>
        set auth-method [cert|psk]
        set cert {string}
        set peer {string}
        set peer-accept [any|defined|...]
        set psk {password}
    next
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                       | Type               | Size               | Default            |
+=============+===================================+====================+====================+====================+
| auth-method | Select certificate or pre-shared  | option             | \-                 | cert               |
|             | key authentication for this       |                    |                    |                    |
|             | authentication group.             |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *cert*      | Certificate authentication.                            |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *psk*       | Pre-shared secret key authentication.                  |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| cert        | Name of certificate to identify   | string             | Maximum length: 35 |                    |
|             | this peer.                        |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| name        | Auth-group name.                  | string             | Maximum length: 35 |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| peer        | If peer-accept is set to one,     | string             | Maximum length: 35 |                    |
|             | select the name of one peer to    |                    |                    |                    |
|             | add to this authentication group. |                    |                    |                    |
|             | The peer must have added with the |                    |                    |                    |
|             | wanopt peer command.              |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| peer-accept | Determine if this auth group      | option             | \-                 | any                |
|             | accepts, any peer, a list of      |                    |                    |                    |
|             | defined peers, or just one peer.  |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *any*       | Accept any peer that can authenticate with this auth   |                         |
|             | |             | group.                                                 |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *defined*   | Accept only the peers added with the wanopt peer       |                         |
|             | |             | command.                                               |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *one*       | Accept the peer added to this auth group using the     |                         |
|             | |             | peer option.                                           |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| psk         | Pre-shared key used by the peers  | password           | Not Specified      |                    |
|             | in this authentication group.     |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+

