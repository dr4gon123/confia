# config firewall shaping-profile

Configure shaping profiles.

## Syntax

```
config firewall shaping-profile
    Description: Configure shaping profiles.
    edit <profile-name>
        set comment {var-string}
        set default-class-id {integer}
        config shaping-entries
            Description: Define shaping entries of this shaping profile.
            edit <id>
                set class-id {integer}
                set priority [top|critical|...]
                set guaranteed-bandwidth-percentage {integer}
                set maximum-bandwidth-percentage {integer}
                set limit {integer}
                set burst-in-msec {integer}
                set cburst-in-msec {integer}
                set red-probability {integer}
                set min {integer}
                set max {integer}
            next
        end
        set type [policing|queuing]
    next
end
```

## Parameters

+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter        | Description                       | Type               | Size               | Default            |
+==================+===================================+====================+====================+====================+
| comment          | Comment.                          | var-string         | Maximum length:    |                    |
|                  |                                   |                    | 1023               |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| default-class-id | Default class ID to handle        | integer            | Minimum value: 0   | 0                  |
|                  | unclassified packets (including   |                    | Maximum value:     |                    |
|                  | all local traffic).               |                    | 4294967295         |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| profile-name     | Shaping profile name.             | string             | Maximum length: 35 |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| type             | Select shaping profile type:      | option             | \-                 | policing           |
|                  | policing / queuing.               |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | Option      | Description                                            |                         |
|                  | +=============+========================================================+                         |
|                  | | *policing*  | Enable policing mode.                                  |                         |
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | *queuing*   | Enable queuing mode.                                   |                         |
|                  | +-------------+--------------------------------------------------------+                         |
+------------------+--------------------------------------------------------------------------------------------------+

