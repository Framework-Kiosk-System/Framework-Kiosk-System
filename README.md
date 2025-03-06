Kiosk-System Framework

Dieses Framework dient zur Erstellung von Kiosk-Systemen. Ein Kiosk-System ist ein interaktives System, das in einem geschlossenen Netzwerk betrieben wird und mehreren Benutzern gleichzeitig den Zugriff von unterschiedlichen Endgeräten auf zentrale Daten ermöglicht. Es kann beispielsweise bei der Ausgabe von Ressourcen unterstützen, indem es übersichtlich anzeigt, wie viele Ressourcen aktuell ausgegeben sind und wer diese zurückgeben muss. Aktuell ist das Framework speziell für den Einsatz mit zwei Endgeräten konzipiert.

--------------------------------------------------------------------------------
Inhalt

- Installation
- Verbindungsaufbau zwischen Geräten
- Systemstart und Konfiguration
- Fehlerbehebung und Netzwerküberprüfung
- Hinweis zum Beenden

--------------------------------------------------------------------------------
Installation

1. Download und Entpacken:
   Lade das Repository als ZIP-Datei herunter und entpacke den Inhalt in einen beliebigen Ordner. Nach dem Entpacken sollten folgende Ordner und Dateien vorhanden sein:
   - dokumentation
   - kiosk-frontend
   - kiosk-backend
   - start.bat

2. Projekt bauen:
   Führe die start.bat-Datei aus. Dabei werden drei Kommandozeilen-Skripte gestartet, die die erforderlichen Server für den Betrieb des Frameworks initialisieren.

--------------------------------------------------------------------------------
Verbindungsaufbau zwischen Geräten

Um eine Verbindung zwischen zwei Laptops herzustellen, gibt es zwei Möglichkeiten:

- LAN-Verbindung: Verbinde die Geräte über ein lokales Netzwerk (LAN).
- Hotspot: Erstelle einen Hotspot auf einem Gerät und verbinde das andere Gerät mit diesem Netzwerk.

Sobald eine Verbindung besteht, sollten sich die Geräte gegenseitig im Netzwerk erkennen, auch wenn sie nicht direkt mit dem Internet (WAN) verbunden sind.

--------------------------------------------------------------------------------
Systemstart und Konfiguration

Beim ersten Start der start.bat-Datei können folgende Meldungen auftreten:

1. Erster Terminal-Screen:
   Hier könnte eine Fehlermeldung erscheinen. Kopiere den folgenden Befehl in diesen Terminal:
     npm install -g http-server
   Warte einige Sekunden, bis alle benötigten Pakete heruntergeladen sind.

2. Zweiter Terminal-Screen:
   Es erscheint eine Fehlermeldung, bei der du zunächst folgenden Befehl ausführen musst:
     npm install
   Warte, bis alle Abhängigkeiten installiert sind.

3. Dritter Terminal-Screen:
   Hier sollten keine Probleme auftreten. Es wird eine Erfolgsmeldung angezeigt, die bestätigt, dass der Server läuft.

Nachdem diese Schritte durchgeführt wurden, schließe bitte alle geöffneten Kommandozeilen-Fenster und starte die start.bat-Datei erneut. Das System sollte nun laufen, sofern in allen drei Terminals die erwarteten Meldungen angezeigt werden.

--------------------------------------------------------------------------------
Fehlerbehebung und Netzwerküberprüfung

Um sicherzustellen, dass beide Geräte sich im selben LAN befinden und miteinander kommunizieren können, gehe wie folgt vor:

1. IP-Adresse ermitteln:
   Öffne auf beiden Geräten die Eingabeaufforderung (CMD) und führe den Befehl aus:
     ipconfig
   Notiere die IPv4-Adressen beider Geräte.

2. Verbindung testen:
   Führe auf einem Gerät folgenden Befehl aus:
     ping [IP-Adresse des anderen Geräts]
   Erhältst du Antwortpakete, bedeutet dies, dass die Geräte miteinander kommunizieren können. Bei einer Fehlermeldung wie "Zeitüberschreitung der Anforderung" oder "Zielhost nicht erreichbar" können Netzwerkprobleme oder Firewall-Einstellungen die Ursache sein.

3. ARP-Tabelle anzeigen:
   Gib den Befehl:
     arp -a
   ein, um zu überprüfen, ob der andere Rechner im Netzwerk erkannt wird.

--------------------------------------------------------------------------------
Hinweis zum Beenden

Um das System zu beenden, schließe bitte alle drei Kommandozeilen-Fenster, in denen die Server laufen. Beim erneuten Start der start.bat-Datei werden die Server wieder neu initialisiert.

--------------------------------------------------------------------------------

