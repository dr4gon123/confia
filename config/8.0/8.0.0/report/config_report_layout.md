# config report layout

Report layout configuration.

## Syntax

```
config report layout
    Description: Report layout configuration.
    edit <name>
        config body-item
            Description: Configure report body item.
            edit <id>
                set chart {string}
                set chart-options {option1}, {option2}, ...
                set content {string}
                set description {string}
                set img-src {string}
                set misc-component [hline|page-break|...]
                config parameters
                    Description: Parameters.
                    edit <id>
                        set name {string}
                        set value {string}
                    next
                end
                set style {string}
                set text-component [text|heading1|...]
                set title {string}
                set top-n {integer}
                set type [text|image|...]
            next
        end
        set cutoff-option [run-time|custom]
        set cutoff-time {user}
        set day [sunday|monday|...]
        set description {string}
        set email-recipients {string}
        set email-send [enable|disable]
        set format {option1}, {option2}, ...
        set max-pdf-report {integer}
        set options {option1}, {option2}, ...
        config page
            Description: Configure report page.
            set column-break-before {option1}, {option2}, ...
            config footer
                Description: Configure report page footer.
                config footer-item
                    Description: Configure report footer item.
                    edit <id>
                        set content {string}
                        set description {string}
                        set img-src {string}
                        set style {string}
                        set type [text|image]
                    next
                end
                set style {string}
            end
            config header
                Description: Configure report page header.
                config header-item
                    Description: Configure report header item.
                    edit <id>
                        set content {string}
                        set description {string}
                        set img-src {string}
                        set style {string}
                        set type [text|image]
                    next
                end
                set style {string}
            end
            set options {option1}, {option2}, ...
            set page-break-before {option1}, {option2}, ...
            set paper [a4|letter]
        end
        set schedule-type [demand|daily|...]
        set style-theme {string}
        set subtitle {string}
        set time {user}
        set title {string}
    next
end
```

## Parameters

+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| Parameter        | Description                       | Type                      | Size                      | Default                   |
+==================+===================================+===========================+===========================+===========================+
| cutoff-option    | Cutoff-option is either run-time  | option                    | \-                        | run-time                  |
|                  | or custom.                        |                           |                           |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | Option      | Description                                            |                                              |
|                  | +=============+========================================================+                                              |
|                  | | *run-time*  | Run time.                                              |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *custom*    | Custom.                                                |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| cutoff-time      | Custom cutoff time to generate    | user                      | Not Specified             |                           |
|                  | report (format = hh:mm).          |                           |                           |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| day              | Schedule days of week to generate | option                    | \-                        | sunday                    |
|                  | report.                           |                           |                           |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | Option      | Description                                            |                                              |
|                  | +=============+========================================================+                                              |
|                  | | *sunday*    | Sunday.                                                |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *monday*    | Monday.                                                |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *tuesday*   | Tuesday.                                               |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *wednesday* | Wednesday.                                             |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *thursday*  | Thursday.                                              |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *friday*    | Friday.                                                |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *saturday*  | Saturday.                                              |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| description      | Description.                      | string                    | Maximum length: 127       |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| email-recipients | Email recipients for generated    | string                    | Maximum length: 511       |                           |
|                  | reports.                          |                           |                           |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| email-send       | Enable/disable sending emails     | option                    | \-                        | disable                   |
|                  | after reports are generated.      |                           |                           |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | Option      | Description                                            |                                              |
|                  | +=============+========================================================+                                              |
|                  | | *enable*    | Enable sending emails after generating reports.        |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *disable*   | Disable sending emails after generating reports.       |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| format           | Report format.                    | option                    | \-                        | pdf                       |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | Option      | Description                                            |                                              |
|                  | +=============+========================================================+                                              |
|                  | | *pdf*       | PDF.                                                   |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| max-pdf-report   | Maximum number of PDF reports to  | integer                   | Minimum value: 1 Maximum  | 31                        |
|                  | keep at one time (oldest report   |                           | value: 365                |                           |
|                  | is overwritten).                  |                           |                           |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| name             | Report layout name.               | string                    | Maximum length: 35        |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| options          | Report layout options.            | option                    | \-                        | include-table-of-content  |
|                  |                                   |                           |                           | auto-numbering-heading    |
|                  |                                   |                           |                           | view-chart-as-heading     |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                  | +-----------------------------------+--------------------------------------------------------+                        |
|                  | | Option                            | Description                                            |                        |
|                  | +===================================+========================================================+                        |
|                  | | *include-table-of-content*        | Include table of content in the report.                |                        |
|                  | +-----------------------------------+--------------------------------------------------------+                        |
|                  | | *auto-numbering-heading*          | Prepend heading with auto numbering.                   |                        |
|                  | +-----------------------------------+--------------------------------------------------------+                        |
|                  | | *view-chart-as-heading*           | Auto add heading for each chart.                       |                        |
|                  | +-----------------------------------+--------------------------------------------------------+                        |
|                  | | *show-html-navbar-before-heading* | Show HTML navigation bar before each heading.          |                        |
|                  | +-----------------------------------+--------------------------------------------------------+                        |
|                  | | *dummy-option*                    | Use this option if you need none of the above options. |                        |
|                  | +-----------------------------------+--------------------------------------------------------+                        |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| schedule-type    | Report schedule type.             | option                    | \-                        | daily                     |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | Option      | Description                                            |                                              |
|                  | +=============+========================================================+                                              |
|                  | | *demand*    | Run on demand.                                         |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *daily*     | Schedule daily.                                        |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
|                  | | *weekly*    | Schedule weekly.                                       |                                              |
|                  | +-------------+--------------------------------------------------------+                                              |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| style-theme      | Report style theme.               | string                    | Maximum length: 35        |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| subtitle         | Report subtitle.                  | string                    | Maximum length: 127       |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| time             | Schedule time to generate report  | user                      | Not Specified             |                           |
|                  | (format = hh:mm).                 |                           |                           |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| title            | Report title.                     | string                    | Maximum length: 127       |                           |
+------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+

