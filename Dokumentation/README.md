# Framework-Kiosk-System
---
<br>

## Aufgabenstellung

**Titel**:
<br>
Framework für ein variabel einsetzbares, server-basiertes Multi-Maschinen-Kiosk-System

**Beschreibung**:
<br>
Ziel des Projekts ist die Entwicklung eines Frameworks für den Betrieb von Kiosk-Systemen.
Ein Kiosk-System soll hierbei definiert sein als ein System, das zur Datenhaltung, -visualisierung und insbes. -manipulation fähig ist und von mindestens zwei sich in räumlicher Nähe zueinander befindlichen Personen an mindestens zwei verschiedenen Endgeräten (Laptops) zeitgleich user-freundlich bedient werden kann.
Die Endgeräte sollen über ein abgeschlossenes LAN, nicht aber notwendigerweise über ein WAN miteinander vernetzt sein.
Ein Beispiel für Anwendungen eines solchen Frameworks für ein Kiosk-System kann etwa die computergestützte Mensch-Mensch-Interaktion bei der Ausgabe von Ausleih-Hardware (Leih-Laptops), von Ausleih-Sicherheitsequipment (Sicherheitsschuhe), von Lehr- und Lernmaterialien (MINDSTORMS) oder von Konferenzmaterialien (Namensschilder, Tagungsunterlagen) sein.
Das Abstraktionslevel „Framework“ ist so gewählt, um auch bei zukünftigen Anwendungsfällen schnell eine benutzerdefinierte Instanz eines Kiosk-Systems erzeugen zu können.
Technologisch soll das Framework als Grundlage von Web-Apps z.B. unter Zuhilfenahme von Node.js oder PHP/Apache umgesetzt werden; eine aus Datenschutzgründen lediglich lokale Datenhaltung kann mit einer MySQL- oder einer NoSQL-Lösung implementiert werden.

**Verantwortlicher Ausbildungsbetrieb**:
<br>
Werkezugmaschinenlabor WZL | IQS Intelligence in Quality Sensing

**Ansprechpartner/-in**:
<br>
Johannes Brand, Walburga Hobbie

## Was heißt 'Framework' für uns?

- Code Basiertes Framework
- Vorgefertigte Komponenten, die der User nutzen kann
- ~~Drag & Drop, zusammenklicken der Oberfläche?~~ => Zu Aufwendig

## [Meilensteinplan](https://github.com/Framework-Kiosk-System/Framework-Kiosk-System/milestones?direction=asc&sort=due_date&state=open)

- Meilensteinplan
- Einarbeitung in den Bestandscode
- Detail Anforderungsanalyse
- Generierung von Tabellen über CMD-Line Skript
- Erstellen der Basis-Schnittstellen (CRUD) aus den Tabellen
- Vorgefertigte Komponenten werden erstellt
- Generiung der Komponenten
- (Generierung vorgefertigter Templates)
- Framework ist fertig
- Framework wird getestet
- Dokumentation zum Framework wird erstellt
- Demo-System wird mit Framework erstellt
- Testing des Demo-Systems
- Plakat wird erstellt
- Aufbau des Stands ist geklärt

## Techstack

### Frontend

CMD-Line Skript erstellt Angular Projekt und füllt es mit Leben.
Der User kann dann die "Libary" an vorgefertigten Komponenten benutzen um sich seine Templates zusammenzubauen. (Vorgefertigte Templates, damit der User nicht bei null startet.)

- [Angular](https://angular.dev)    => Komponentenbasiert, Kenntnisse sind bereits da
- [daisyUI Components](https://daisyui.com)    => Themes festlegbar, Vorgefertigte Komponenten
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)   => Responsive
- Django
- Vaadin
- ~~React      => Komponentenbasiert~~ => Keine Kenntnis da
- ~~Plain CSS  => Mega Eklig~~ => Gibt bessere Alternativen
- ~~Bootstrap~~ => Gibt bessere Alternativen

### Backend

Mögliche Frameworks für's Backend (Entscheidung noch unklar):
- .NET mit EF
- Django
- FastAPI
- Pocketbase => einfach, viel Funktionalität **'Out of the Box'**, kann lokal gehostet werden
- ~~🤢 PHP~~

### Datenbank

Dynamisch generierte Datenbank, die zu jeder Tabelle die erstellt wird automatisch die Basis CRUD Schnittstellen zur Verfügung stellt. So kann der User die Api-Calls verändern und eigene hinzufügen.

- Dynamisch generiert
- MySQL Datenbank / SQLite
- Pocketbase

## Demo-System

 Getränkesystem, bei dem die Besucher der Messe zum Stand kommen können und ihre Daten eintragen und Informationen über das Framework per Mail oder QR-Code zu bekommen.