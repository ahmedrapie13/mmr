const containerData = document.querySelector('#service-details')
const data = [
    service1 = {
        id: 'ser1',
        title:`Finanzbuchhaltung`,
        p:`Unsere professionelle Finanzbuchhaltung ist das Rückgrat Ihres Unternehmens.Wir setzen modernste digitale Buchhaltungssysteme ein und arbeiten online, um die lückenlose Erfassung und sorgfältige Verwaltung Ihrer Geschäftstransaktionen zu gewährleisten.Mit sicherer Cloud-Technologie können Sie jederzeit und von überall auf Ihre Finanzdaten zugreifen. Durch die digitale Abwicklung sparen Sie Zeit,minimieren den Papierverbrauch und profitieren von einer effizienten Datenverarbeitung.`
    },
    service2 = {
        id: 'ser2',
        title:`Lohnbuchhaltung`,
        p:`Die Lohnbuchhaltung ist eine sensible und komplexe Aufgabe, die wir mit höchster Sorgfalt und Genauigkeit ausführen. Wir nutzen moderne digitale Lohnabrechnungssysteme und ermöglichen Ihnen und Ihren Mitarbeitern den Zugriff auf digitale Lohnabrechnungen und Gehaltsdokumente. Mit sicherer Datenübertragung und verschlüsselten Kommunikationskanälen gewährleisten wir den Schutz Ihrer sensiblen Mitarbeiterdaten. So können Sie sich darauf verlassen, dass Ihre Lohnabrechnungen sicher und termingerecht erstellt werden.`


    },
    service3 = {
        id: 'ser3',
        title:` Hilfeleistung bei der Vorbereitung von Jahresabschlüssen Steuererklärungen`,
        p:`Unsere umfassende Dienstleistung zur Vorbereitung von Jahresabschlüssen, Einnahmen-Überschuss-Rechnungen und Steuererklärungen ist darauf ausgerichtet, Ihre Finanzberichte und steuerlichen Angelegenheiten präzise und termingerecht zu bearbeiten. In enger Zusammenarbeit mit erfahrenen Steuerberatern unterstützen wir Sie bei der Vorbereitung und Aufbereitung Ihrer Unterlagen für die steuerliche Abwicklung.

        Unser hochqualifiziertes Team arbeitet Hand in Hand mit ausgewählten Steuerberatern, um sicherzustellen, dass sämtliche Aspekte Ihrer Jahresabschlüsse und Steuererklärungen vollständig und korrekt erfasst werden. Wir analysieren Ihre Finanzdaten und stellen sicher, dass alle gesetzlichen Vorgaben und Richtlinien eingehalten werden, um eine reibungslose und fehlerfreie Erstellung der Unterlagen zu gewährleisten.
        
        Da wir selbst keine Steuerberatungsleistungen anbieten, sind wir bestrebt, eine nahtlose Kooperation mit Ihrem Steuerberater zu ermöglichen. Wir stehen in regelmäßigem Austausch mit dem Steuerberatungsteam, um eventuelle Fragen zu klären, steuerliche Optimierungsmöglichkeiten zu identifizieren und sicherzustellen, dass Ihre Jahresabschlüsse und Steuererklärungen den höchsten Qualitätsstandards entsprechen.
        
        Unser Ziel ist es, Sie bestmöglich zu unterstützen, indem wir Ihnen den administrativen Aufwand abnehmen und Sie entlasten. Mit unserer Hilfeleistung und der engen Zusammenarbeit mit Steuerberatern können Sie sich darauf verlassen, dass Ihre steuerlichen Angelegenheiten in sicheren Händen liegen und Sie sich ganz auf Ihr Kerngeschäft konzentrieren können.
        
        Bitte beachten Sie, dass wir selbst keine Steuerberatungsleistungen erbringen, sondern als zuverlässiger Partner dafür sorgen, dass alle relevanten Unterlagen und Informationen für eine effiziente Zusammenarbeit mit Ihrem Steuerberater bereitstehen. Unsere Dienstleistung stellt sicher, dass Sie von einer professionellen und sorgfältigen Finanzbuchhaltung profitieren und Ihre steuerlichen Pflichten reibungslos erfüllen können.
        `
    },
    service4 = {
        id: 'ser4',
        title:`Betriebswirtschaftliche Beratung `,
        p:`Unsere betriebswirtschaftliche Beratung zielt darauf ab, Ihr Unternehmen erfolgreicher und wettbewerbsfähiger zu machen. Wir analysieren Ihre betrieblichen Abläufe, Finanzdaten und Geschäftsstrategien, um Chancen und Potenziale zu identifizieren. Mit unserem fundierten Fachwissen und unserer Erfahrung unterstützen wir Sie bei der Entwicklung von Maßnahmenplänen zur Effizienzsteigerung, Kostenoptimierung und Umsatzsteigerung. Gemeinsam erarbeiten wir eine nachhaltige Geschäftsstrategie, um Ihr Unternehmen langfristig auf Erfolgskurs zu bringen.`
    },
    service5 = {
        id: 'ser5',
        title:`Existenzgründungsberatung und – Betreuung`,
        p:`Wenn Sie den Schritt in die Selbstständigkeit wagen möchten, stehen wir Ihnen von Anfang an zur Seite. Unsere Existenzgründungsberatung unterstützt Sie bei der Erstellung eines durchdachten Businessplans, der die Grundlage für Ihren Erfolg legt. Wir helfen Ihnen bei der Wahl der passenden Rechtsform, begleiten Sie bei Behördengängen und beraten Sie zu Fördermöglichkeiten und Finanzierungsfragen. Während der Gründungsphase bleiben wir Ihr verlässlicher Partner und sorgen dafür, dass Sie bestens vorbereitet in die Zukunft starten können.`
    },
    service6 = {
        id: 'ser6',
        title:`Tätigkeit auch vor Ort beim Mandanten möglich`,
        p:`Unser flexibler Service ermöglicht es uns, unsere Dienstleistungen nicht nur in unseren eigenen Räumlichkeiten anzubieten, sondern auch direkt vor Ort in Ihrem Unternehmen tätig zu sein. Wir verstehen, dass jede Firma einzigartig ist und ihre spezifischen Bedürfnisse hat. Daher sind wir darauf ausgerichtet, unseren Kunden eine individuelle Betreuung und maßgeschneiderte Lösungen anzubieten.
        Durch die Tätigkeit vor Ort haben wir die Möglichkeit, Ihre betrieblichen Prozesse und Finanzdaten aus erster Hand zu analysieren. Das persönliche Treffen ermöglicht eine effiziente Kommunikation und einen schnelleren Informationsaustausch. Wir können direkt auf Ihre Anliegen eingehen, Fragen klären und Sie mit gezielten Empfehlungen unterstützen.
        Unser erfahrenes Team kann Schulungen und Beratungsgespräche direkt in Ihrem Unternehmen durchführen, um Ihre Mitarbeiter gezielt zu schulen und zu unterstützen. Die persönliche Betreuung stärkt das Vertrauensverhältnis zwischen uns und unseren Mandanten, was für eine erfolgreiche Zusammenarbeit von großer Bedeutung ist.
        Die Tätigkeit vor Ort bietet Ihnen zudem die Möglichkeit, uns und unsere Arbeitsweise näher kennenzulernen. Wir sind bestrebt, eine transparente und vertrauensvolle Partnerschaft aufzubauen und Ihre individuellen Bedürfnisse bestmöglich zu erfüllen.
        Unser Ziel ist es, Ihnen eine umfassende und maßgeschneiderte Beratung zu bieten, die genau auf Ihre Anforderungen zugeschnitten ist. Wir sind für Sie da, sowohl in unseren Räumlichkeiten als auch direkt vor Ort in Ihrem Unternehmen, um Ihnen professionelle Unterstützung und Lösungen zu garantieren. Wenn Sie von unserer Tätigkeit vor Ort profitieren möchten, zögern Sie nicht, uns zu kontaktieren. Wir freuen uns darauf, Ihnen mit unseren Dienstleistungen zur Seite zu stehen.
        
        Alternativ: 
        Unser Service zeichnet sich durch hohe Flexibilität aus. Wir sind nicht nur in unseren Räumlichkeiten für Sie da, sondern kommen auch gerne zu Ihnen. Ob für Besprechungen, Schulungen oder eine persönliche Betreuung – wir passen uns Ihren Bedürfnissen an und stehen Ihnen vor Ort zur Verfügung. Durch diese enge Zusammenarbeit können wir eine noch individuellere Beratung und Lösungsfindung gewährleisten.
        `
    },
    service7 = {
        id: 'ser7',
        title:`Kontrolle und Auswertung der Finanzbuchhaltung`,
        p:`Die regelmäßige Kontrolle und Auswertung Ihrer Finanzbuchhaltung ist essenziell, um ein präzises Bild Ihrer wirtschaftlichen Lage zu erhalten. Unsere Experten überprüfen Ihre Buchführung auf Vollständigkeit und Richtigkeit, um mögliche Fehler frühzeitig zu erkennen und zu korrigieren. Mit aussagekräftigen Auswertungen und Kennzahlen liefern wir Ihnen die Grundlage für eine fundierte Unternehmenssteuerung und unterstützen Sie dabei, Ihre Geschäftsprozesse kontinuierlich zu optimieren.`
    },
    service8 = {
        id: 'ser8',
        title:`Unterstützung der ausländischen Investoren bei ihrem Eintritt in den deutschen Markt`,
        p:`Unser Beratungsunternehmen ist Ihr verlässlicher Partner bei der erfolgreichen Erschließung des deutschen Marktes. Wir bieten maßgeschneiderte Dienstleistungen, um ausländischen Investoren den Weg in Deutschland zu erleichtern. Durch unsere langjährigen Kooperationen mit Rechtsanwälten, Notaren und Steuerberatern sind wir in der Lage, Ihnen eine ganzheitliche und professionelle Unterstützung anzubieten.
    
        Gemeinsam entwickeln wir eine individuelle Strategie für Ihren Markteintritt in Deutschland. Dabei berücksichtigen wir Ihre spezifischen Unternehmensziele und Anforderungen. Unsere Expertise in internationalen Geschäftsbeziehungen ermöglicht es uns, kulturelle Unterschiede zu berücksichtigen und den Informationsaustausch zwischen Ihnen und den deutschen Partnern zu erleichtern.
        
        Wir begleiten Sie bei der Gründung Ihrer deutschen Niederlassung oder Tochtergesellschaft und unterstützen Sie bei allen rechtlichen und formalen Schritten. Dank unserer Zusammenarbeit mit erfahrenen Rechtsanwälten und Notaren stellen wir sicher, dass sämtliche Verträge, Vereinbarungen und rechtlichen Dokumente den deutschen Vorschriften entsprechen und Ihre Interessen gewahrt werden.
        
        Unsere Kooperationen mit Steuerberatern ermöglichen es uns, Ihre finanziellen Angelegenheiten kompetent zu verwalten. Wir bieten Ihnen umfassende Buchhaltungs- und Steuerberatungsleistungen, die auf die deutschen Steuergesetze zugeschnitten sind. Durch die enge Zusammenarbeit gewährleisten wir eine optimale steuerliche Betreuung und maximale Steuereffizienz.
        
        Zusätzlich bieten wir Ihnen betriebswirtschaftliche Beratung, um Ihre Geschäftsstrategie in Deutschland zu optimieren. Unsere Analyse des deutschen Marktes, des Wettbewerbsumfelds und Ihrer Geschäftsprozesse ermöglicht es uns, fundierte Entscheidungen zu treffen und Ihre Wettbewerbsfähigkeit zu stärken.
        
        Unsere transparente und professionelle Herangehensweise stellt sicher, dass Sie sich auf Ihre unternehmerischen Aktivitäten konzentrieren können, während wir Sie durch den gesamten Prozess des Markteintritts in Deutschland begleiten.
        
        Wenn Sie als ausländischer Investor in Deutschland Fuß fassen möchten oder weitere Informationen zu unseren Dienstleistungen wünschen, stehen wir Ihnen gerne zur Verfügung. Kontaktieren Sie uns und lassen Sie uns gemeinsam Ihren Erfolgsweg gestalten. Wir freuen uns darauf, Sie bei Ihrem Markteintritt in Deutschland zu unterstützen und Ihnen die bestmögliche Beratung durch unsere Kooperationen mit Rechtsanwälten, Notaren und Steuerberatern zu bieten.
        `
    }
]

data.map((single) => {
    if(location.href.includes(single.id)){
        containerData.innerHTML = `
        <div class="container" data-aos="fade-up" data-aos-delay="100">
        
                    <div class="row gy-4">
        
                    <div class="col-lg-4">
                        <div class="services-list">
                        <a href="service-details.html?ser1" id='ser1' class="sideLink">Finanzbuchhaltung</a>
                        <a href="service-details.html?ser2" id='ser2' class="sideLink">Lohnbuchhaltung</a>
                        <a href="service-details.html?ser3" id='ser3' class="sideLink">Hilfeleistung bei der Vorbereitung von Jahresabschlüssen Steuererklärungen</a>
                        <a href="service-details.html?ser4" id='ser4' class="sideLink">Betriebswirtschaftliche Beratung</a>
                        <a href="service-details.html?ser5" id='ser5' class="sideLink">Unternehmensberatung und Betreuung</a>
                        <a href="service-details.html?ser6" id='ser6' class="sideLink">Tätigkeit auch vor Ort beim Mandanten möglich</a>
                        <a href="service-details.html?ser7" id='ser7' class="sideLink">Kontrolle und Auswertung der Finanzbuchhaltung</a>
                        <a href="service-details.html?ser8" id='ser8' class="sideLink">Unterstützung der ausländischen Investoren bei ihrem Eintritt in den deutschen Markt</a>
                        </div>
        
                        <h4>Unsere Dienstleistungen</h4>
                        <p>Wir bieten die besten Dienstleistungen im Bereich der Finanzbuchführung</p>
                    </div>
        
                    <div class="col-lg-8">
                    <img src="assets/img/services.svg" alt="" class="img-fluid services-img">
                        <h3>${single.title}</h3>
                        <p>
                            ${single.p}
                        </p>
                    </div>
        
                    </div>
        
        </div>
            `
            let sideLink = document.querySelectorAll('.sideLink')
            sideLink.forEach((link) => {
                if(location.href.includes(link.id)) {
                    link.classList.add("active")
                }
            })
        }
    
})
