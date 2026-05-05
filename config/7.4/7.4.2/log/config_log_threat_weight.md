# config log threat-weight

Configure threat weight settings.

## Syntax

```
config log threat-weight
    Description: Configure threat weight settings.
    config application
        Description: Application-control threat weight settings.
        edit <id>
            set category {integer}
            set level [disable|low|...]
        next
    end
    set blocked-connection [disable|low|...]
    set botnet-connection-detected [disable|low|...]
    set failed-connection [disable|low|...]
    config geolocation
        Description: Geolocation-based threat weight settings.
        edit <id>
            set country {string}
            set level [disable|low|...]
        next
    end
    config ips
        Description: IPS threat weight settings.
        set info-severity [disable|low|...]
        set low-severity [disable|low|...]
        set medium-severity [disable|low|...]
        set high-severity [disable|low|...]
        set critical-severity [disable|low|...]
    end
    config level
        Description: Score mapping for threat weight levels.
        set low {integer}
        set medium {integer}
        set high {integer}
        set critical {integer}
    end
    config malware
        Description: Anti-virus malware threat weight settings.
        set virus-infected [disable|low|...]
        set inline-block [disable|low|...]
        set file-blocked [disable|low|...]
        set command-blocked [disable|low|...]
        set oversized [disable|low|...]
        set virus-scan-error [disable|low|...]
        set switch-proto [disable|low|...]
        set mimefragmented [disable|low|...]
        set virus-file-type-executable [disable|low|...]
        set virus-outbreak-prevention [disable|low|...]
        set content-disarm [disable|low|...]
        set malware-list [disable|low|...]
        set ems-threat-feed [disable|low|...]
        set fsa-malicious [disable|low|...]
        set fsa-high-risk [disable|low|...]
        set fsa-medium-risk [disable|low|...]
    end
    set status [enable|disable]
    set url-block-detected [disable|low|...]
    config web
        Description: Web filtering threat weight settings.
        edit <id>
            set category {integer}
            set level [disable|low|...]
        next
    end
end
```

## Parameters

+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                  | Description                       | Type               | Size               | Default            |
+============================+===================================+====================+====================+====================+
| blocked-connection         | Threat weight score for blocked   | option             | \-                 | high               |
|                            | connections.                      |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | Option      | Description                                            |                         |
|                            | +=============+========================================================+                         |
|                            | | *disable*   | Disable threat weight scoring for blocked connections. |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *low*       | Use the low level score for blocked connections.       |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *medium*    | Use the medium level score for blocked connections.    |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *high*      | Use the high level score for blocked connections.      |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *critical*  | Use the critical level score for blocked connections.  |                         |
|                            | +-------------+--------------------------------------------------------+                         |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| botnet-connection-detected | Threat weight score for detected  | option             | \-                 | critical           |
|                            | botnet connections.               |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | Option      | Description                                            |                         |
|                            | +=============+========================================================+                         |
|                            | | *disable*   | Disable threat weight scoring for detected botnet      |                         |
|                            | |             | connections.                                           |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *low*       | Use the low level score for detected botnet            |                         |
|                            | |             | connections.                                           |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *medium*    | Use the medium level score for detected botnet         |                         |
|                            | |             | connections.                                           |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *high*      | Use the high level score for detected botnet           |                         |
|                            | |             | connections.                                           |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *critical*  | Use the critical level score for detected botnet       |                         |
|                            | |             | connections.                                           |                         |
|                            | +-------------+--------------------------------------------------------+                         |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| failed-connection          | Threat weight score for failed    | option             | \-                 | low                |
|                            | connections.                      |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | Option      | Description                                            |                         |
|                            | +=============+========================================================+                         |
|                            | | *disable*   | Disable threat weight scoring for failed connections.  |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *low*       | Use the low level score for failed connections.        |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *medium*    | Use the medium level score for failed connections.     |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *high*      | Use the high level score for failed connections.       |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *critical*  | Use the critical level score for failed connections.   |                         |
|                            | +-------------+--------------------------------------------------------+                         |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status                     | Enable/disable the threat weight  | option             | \-                 | enable             |
|                            | feature.                          |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | Option      | Description                                            |                         |
|                            | +=============+========================================================+                         |
|                            | | *enable*    | Enable the threat weight feature.                      |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *disable*   | Disable the threat weight feature.                     |                         |
|                            | +-------------+--------------------------------------------------------+                         |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| url-block-detected         | Threat weight score for URL       | option             | \-                 | high               |
|                            | blocking.                         |                    |                    |                    |
+----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | Option      | Description                                            |                         |
|                            | +=============+========================================================+                         |
|                            | | *disable*   | Disable threat weight scoring for URL blocking.        |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *low*       | Use the low level score for URL blocking.              |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *medium*    | Use the medium level score for URL blocking.           |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *high*      | Use the high level score for URL blocking.             |                         |
|                            | +-------------+--------------------------------------------------------+                         |
|                            | | *critical*  | Use the critical level score for URL blocking.         |                         |
|                            | +-------------+--------------------------------------------------------+                         |
+----------------------------+--------------------------------------------------------------------------------------------------+

