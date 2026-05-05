# config system device-upgrade-exemptions

Configure device upgrade exemptions. Device will stop receiving upgrade notifications on the GUI.

## Syntax

```
config system device-upgrade-exemptions
    Description: Configure device upgrade exemptions. Device will stop receiving upgrade notifications on the GUI.
    edit <id>
        set fortinet-device {string}
        set version {user}
    next
end
```

## Parameters

+-----------------+-----------------------------------+---------+-----------+---------+
| Parameter       | Description                       | Type    | Size      | Default |
+=================+===================================+=========+===========+=========+
| fortinet-device | Fortinet extension device         | string  | Maximum   |         |
|                 | (FortiAP, FortiSwitch,            |         | length:   |         |
|                 | FortiExtender).                   |         | 35        |         |
+-----------------+-----------------------------------+---------+-----------+---------+
| id              | Device upgrade exemption ID (0 -  | integer | Minimum   | 0       |
|                 | 65535).                           |         | value: 0  |         |
|                 |                                   |         | Maximum   |         |
|                 |                                   |         | value:    |         |
|                 |                                   |         | 65535     |         |
+-----------------+-----------------------------------+---------+-----------+---------+
| version         | Highest version of Fortinet       | user    | Not       |         |
|                 | firmware to exempt (format in     |         | Specified |         |
|                 | Major.minor.patch, such as        |         |           |         |
|                 | 7.6.4).                           |         |           |         |
+-----------------+-----------------------------------+---------+-----------+---------+

