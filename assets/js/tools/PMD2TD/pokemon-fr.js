var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var pokemon=[
"----------"/*0 : 0000*/,
"Bulbizarre"/*1 : 0001*/,
"Herbizarre"/*2 : 0002*/,
"Florizarre"/*3 : 0003*/,
"Salamèche"/*4 : 0004*/,
"Reptincel"/*5 : 0005*/,
"Dracaufeu"/*6 : 0006*/,
"Carapuce"/*7 : 0007*/,
"Carabaffe"/*8 : 0008*/,
"Tortank"/*9 : 0009*/,
"Chenipan"/*10 : 000A*/,
"Chrysacier"/*11 : 000B*/,
"Papilusion"/*12 : 000C*/,
"Aspicot"/*13 : 000D*/,
"Coconfort"/*14 : 000E*/,
"Dardargnan"/*15 : 000F*/,
"Roucool"/*16 : 0010*/,
"Roucoups"/*17 : 0011*/,
"Roucarnage"/*18 : 0012*/,
"Rattata"/*19 : 0013*/,
"Rattatac"/*20 : 0014*/,
"Piafabec"/*21 : 0015*/,
"Rapasdepic"/*22 : 0016*/,
"Abo"/*23 : 0017*/,
"Arbok"/*24 : 0018*/,
"Pikachu"/*25 : 0019*/,
"Raichu"/*26 : 001A*/,
"Sabelette"/*27 : 001B*/,
"Sablaireau"/*28 : 001C*/,
"Nidoran♀"/*29 : 001D*/,
"Nidorina"/*30 : 001E*/,
"Nidoqueen"/*31 : 001F*/,
"Nidoran♂"/*32 : 0020*/,
"Nidorino"/*33 : 0021*/,
"Nidoking"/*34 : 0022*/,
"Mélofée"/*35 : 0023*/,
"Mélodelfe"/*36 : 0024*/,
"Goupix"/*37 : 0025*/,
"Feunard"/*38 : 0026*/,
"Rondoudou"/*39 : 0027*/,
"Grodoudou"/*40 : 0028*/,
"Nosferapti"/*41 : 0029*/,
"Nosferalto"/*42 : 002A*/,
"Mystherbe"/*43 : 002B*/,
"Ortide"/*44 : 002C*/,
"Rafflesia"/*45 : 002D*/,
"Paras"/*46 : 002E*/,
"Parasect"/*47 : 002F*/,
"Mimitoss"/*48 : 0030*/,
"Aéromite"/*49 : 0031*/,
"Taupiqueur"/*50 : 0032*/,
"Triopikeur"/*51 : 0033*/,
"Miaouss"/*52 : 0034*/,
"Persian"/*53 : 0035*/,
"Psykokwak"/*54 : 0036*/,
"Akwakwak"/*55 : 0037*/,
"Férosinge"/*56 : 0038*/,
"Colossinge"/*57 : 0039*/,
"Caninos"/*58 : 003A*/,
"Arcanin"/*59 : 003B*/,
"Ptitard"/*60 : 003C*/,
"Têtarte"/*61 : 003D*/,
"Tartard"/*62 : 003E*/,
"Abra"/*63 : 003F*/,
"Kadabra"/*64 : 0040*/,
"Alakazam"/*65 : 0041*/,
"Machoc"/*66 : 0042*/,
"Machopeur"/*67 : 0043*/,
"Mackogneur"/*68 : 0044*/,
"Chétiflor"/*69 : 0045*/,
"Boustiflor"/*70 : 0046*/,
"Empiflor"/*71 : 0047*/,
"Tentacool"/*72 : 0048*/,
"Tentacruel"/*73 : 0049*/,
"Racaillou"/*74 : 004A*/,
"Gravalanch"/*75 : 004B*/,
"Grolem"/*76 : 004C*/,
"Ponyta"/*77 : 004D*/,
"Galopa"/*78 : 004E*/,
"Ramoloss"/*79 : 004F*/,
"Flagadoss"/*80 : 0050*/,
"Magnéti"/*81 : 0051*/,
"Magnéton"/*82 : 0052*/,
"Canarticho"/*83 : 0053*/,
"Doduo"/*84 : 0054*/,
"Dodrio"/*85 : 0055*/,
"Otaria"/*86 : 0056*/,
"Lamantine"/*87 : 0057*/,
"Tadmorv"/*88 : 0058*/,
"Grotadmorv"/*89 : 0059*/,
"Kokiyas"/*90 : 005A*/,
"Crustabri"/*91 : 005B*/,
"Fantominus"/*92 : 005C*/,
"Spectrum"/*93 : 005D*/,
"Ectoplasma"/*94 : 005E*/,
"Onix"/*95 : 005F*/,
"Soporifik"/*96 : 0060*/,
"Hypnomade"/*97 : 0061*/,
"Krabby"/*98 : 0062*/,
"Krabboss"/*99 : 0063*/,
"Voltorbe"/*100 : 0064*/,
"Electrode"/*101 : 0065*/,
"Noeunoeuf"/*102 : 0066*/,
"Noadkoko"/*103 : 0067*/,
"Osselait"/*104 : 0068*/,
"Ossatueur"/*105 : 0069*/,
"Kicklee"/*106 : 006A*/,
"Tygnon"/*107 : 006B*/,
"Excelangue"/*108 : 006C*/,
"Smogo"/*109 : 006D*/,
"Smogogo"/*110 : 006E*/,
"Rhinocorne"/*111 : 006F*/,
"Rhinoféros"/*112 : 0070*/,
"Leveinard"/*113 : 0071*/,
"Saquedeneu"/*114 : 0072*/,
"Kangourex"/*115 : 0073*/,
"Hypotrempe"/*116 : 0074*/,
"Hypocéan"/*117 : 0075*/,
"Poissirène"/*118 : 0076*/,
"Poissoroy"/*119 : 0077*/,
"Stari"/*120 : 0078*/,
"Staross"/*121 : 0079*/,
"M. Mime"/*122 : 007A*/,
"Insécateur"/*123 : 007B*/,
"Lippoutou"/*124 : 007C*/,
"Elektek"/*125 : 007D*/,
"Magmar"/*126 : 007E*/,
"Scarabrute"/*127 : 007F*/,
"Tauros"/*128 : 0080*/,
"Magicarpe"/*129 : 0081*/,
"Léviator"/*130 : 0082*/,
"Lokhlass"/*131 : 0083*/,
"Métamorph"/*132 : 0084*/,
"Evoli"/*133 : 0085*/,
"Aquali"/*134 : 0086*/,
"Voltali"/*135 : 0087*/,
"Pyroli"/*136 : 0088*/,
"Porygon"/*137 : 0089*/,
"Amonita"/*138 : 008A*/,
"Amonistar"/*139 : 008B*/,
"Kabuto"/*140 : 008C*/,
"Kabutops"/*141 : 008D*/,
"Ptéra"/*142 : 008E*/,
"Ronflex"/*143 : 008F*/,
"Artikodin"/*144 : 0090*/,
"Electhor"/*145 : 0091*/,
"Sulfura"/*146 : 0092*/,
"Minidraco"/*147 : 0093*/,
"Draco"/*148 : 0094*/,
"Dracolosse"/*149 : 0095*/,
"Mewtwo"/*150 : 0096*/,
"Mew"/*151 : 0097*/,
"Germignon"/*152 : 0098*/,
"Macronium"/*153 : 0099*/,
"Méganium"/*154 : 009A*/,
"Héricendre"/*155 : 009B*/,
"Feurisson"/*156 : 009C*/,
"Typhlosion"/*157 : 009D*/,
"Kaiminus"/*158 : 009E*/,
"Crocrodil"/*159 : 009F*/,
"Aligatueur"/*160 : 00A0*/,
"Fouinette"/*161 : 00A1*/,
"Fouinar"/*162 : 00A2*/,
"Hoothoot"/*163 : 00A3*/,
"Noarfang"/*164 : 00A4*/,
"Coxy"/*165 : 00A5*/,
"Coxyclaque"/*166 : 00A6*/,
"Mimigal"/*167 : 00A7*/,
"Migalos"/*168 : 00A8*/,
"Nostenfer"/*169 : 00A9*/,
"Loupio"/*170 : 00AA*/,
"Lanturn"/*171 : 00AB*/,
"Pichu"/*172 : 00AC*/,
"Mélo"/*173 : 00AD*/,
"Toudoudou"/*174 : 00AE*/,
"Togepi"/*175 : 00AF*/,
"Togetic"/*176 : 00B0*/,
"Natu"/*177 : 00B1*/,
"Xatu"/*178 : 00B2*/,
"Wattouat"/*179 : 00B3*/,
"Lainergie"/*180 : 00B4*/,
"Pharamp"/*181 : 00B5*/,
"Joliflor"/*182 : 00B6*/,
"Marill"/*183 : 00B7*/,
"Azumarill"/*184 : 00B8*/,
"Simularbre"/*185 : 00B9*/,
"Tarpaud"/*186 : 00BA*/,
"Granivol"/*187 : 00BB*/,
"Floravol"/*188 : 00BC*/,
"Cotovol"/*189 : 00BD*/,
"Capumain"/*190 : 00BE*/,
"Tournegrin"/*191 : 00BF*/,
"Héliatronc"/*192 : 00C0*/,
"Yanma"/*193 : 00C1*/,
"Axoloto"/*194 : 00C2*/,
"Maraiste"/*195 : 00C3*/,
"Mentali"/*196 : 00C4*/,
"Noctali"/*197 : 00C5*/,
"Cornèbre"/*198 : 00C6*/,
"Roigada"/*199 : 00C7*/,
"Feuforêve"/*200 : 00C8*/,
"Zarbi A"/*201 : 00C9*/,
"Zarbi B"/*202 : 00CA*/,
"Zarbi C"/*203 : 00CB*/,
"Zarbi D"/*204 : 00CC*/,
"Zarbi E"/*205 : 00CD*/,
"Zarbi F"/*206 : 00CE*/,
"Zarbi G"/*207 : 00CF*/,
"Zarbi H"/*208 : 00D0*/,
"Zarbi I"/*209 : 00D1*/,
"Zarbi J"/*210 : 00D2*/,
"Zarbi K"/*211 : 00D3*/,
"Zarbi L"/*212 : 00D4*/,
"Zarbi M"/*213 : 00D5*/,
"Zarbi N"/*214 : 00D6*/,
"Zarbi O"/*215 : 00D7*/,
"Zarbi P"/*216 : 00D8*/,
"Zarbi Q"/*217 : 00D9*/,
"Zarbi R"/*218 : 00DA*/,
"Zarbi S"/*219 : 00DB*/,
"Zarbi T"/*220 : 00DC*/,
"Zarbi U"/*221 : 00DD*/,
"Zarbi V"/*222 : 00DE*/,
"Zarbi W"/*223 : 00DF*/,
"Zarbi X"/*224 : 00E0*/,
"Zarbi Y"/*225 : 00E1*/,
"Zarbi Z"/*226 : 00E2*/,
"Zarbi !"/*227 : 00E3*/,
"Zarbi ?"/*228 : 00E4*/,
"Qulbutoké"/*229 : 00E5*/,
"Girafarig"/*230 : 00E6*/,
"Pomdepik"/*231 : 00E7*/,
"Foretress"/*232 : 00E8*/,
"Insolourdo"/*233 : 00E9*/,
"Scorplane"/*234 : 00EA*/,
"Steelix"/*235 : 00EB*/,
"Snubbull"/*236 : 00EC*/,
"Granbull"/*237 : 00ED*/,
"Qwilfish"/*238 : 00EE*/,
"Cizayox"/*239 : 00EF*/,
"Caratroc"/*240 : 00F0*/,
"Scarhino"/*241 : 00F1*/,
"Farfuret"/*242 : 00F2*/,
"Teddiursa"/*243 : 00F3*/,
"Ursaring"/*244 : 00F4*/,
"Limagma"/*245 : 00F5*/,
"Volcaropod"/*246 : 00F6*/,
"Marcacrin"/*247 : 00F7*/,
"Cochignon"/*248 : 00F8*/,
"Corayon"/*249 : 00F9*/,
"Rémoraid"/*250 : 00FA*/,
"Octillery"/*251 : 00FB*/,
"Cadoizo"/*252 : 00FC*/,
"Démanta"/*253 : 00FD*/,
"Airmure"/*254 : 00FE*/,
"Malosse"/*255 : 00FF*/,
"Démolosse"/*256 : 0100*/,
"Hyporoi"/*257 : 0101*/,
"Phanpy"/*258 : 0102*/,
"Donphan"/*259 : 0103*/,
"Porygon2"/*260 : 0104*/,
"Cerfrousse"/*261 : 0105*/,
"Queulorior"/*262 : 0106*/,
"Debugant"/*263 : 0107*/,
"Kapoera"/*264 : 0108*/,
"Lippouti"/*265 : 0109*/,
"Elekid"/*266 : 010A*/,
"Magby"/*267 : 010B*/,
"Ecrémeuh"/*268 : 010C*/,
"Leuphorie"/*269 : 010D*/,
"Raikou"/*270 : 010E*/,
"Entei"/*271 : 010F*/,
"Suicune"/*272 : 0110*/,
"Embrylex"/*273 : 0111*/,
"Ymphect"/*274 : 0112*/,
"Tyranocif"/*275 : 0113*/,
"Lugia"/*276 : 0114*/,
"Ho-Oh"/*277 : 0115*/,
"Celebi"/*278 : 0116*/,
"Celebi"/*279 : 0117*/,
"Arcko"/*280 : 0118*/,
"Massko"/*281 : 0119*/,
"Jungko"/*282 : 011A*/,
"Poussifeu"/*283 : 011B*/,
"Galifeu"/*284 : 011C*/,
"Braségali"/*285 : 011D*/,
"Gobou"/*286 : 011E*/,
"Flobio"/*287 : 011F*/,
"Laggron"/*288 : 0120*/,
"Medhyèna"/*289 : 0121*/,
"Grahyèna"/*290 : 0122*/,
"Zigzaton"/*291 : 0123*/,
"Linéon"/*292 : 0124*/,
"Chenipotte"/*293 : 0125*/,
"Armulys"/*294 : 0126*/,
"Charmillon"/*295 : 0127*/,
"Blindalys"/*296 : 0128*/,
"Papinox"/*297 : 0129*/,
"Nénupiot"/*298 : 012A*/,
"Lombre"/*299 : 012B*/,
"Ludicolo"/*300 : 012C*/,
"Grainipiot"/*301 : 012D*/,
"Pifeuil"/*302 : 012E*/,
"Tengalice"/*303 : 012F*/,
"Nirondelle"/*304 : 0130*/,
"Hélédelle"/*305 : 0131*/,
"Goélise"/*306 : 0132*/,
"Bekipan"/*307 : 0133*/,
"Tarsal"/*308 : 0134*/,
"Kirlia"/*309 : 0135*/,
"Gardevoir"/*310 : 0136*/,
"Arakdo"/*311 : 0137*/,
"Maskadra"/*312 : 0138*/,
"Balignon"/*313 : 0139*/,
"Chapignon"/*314 : 013A*/,
"Parecool"/*315 : 013B*/,
"Vigoroth"/*316 : 013C*/,
"Monaflèmit"/*317 : 013D*/,
"Ningale"/*318 : 013E*/,
"Ninjask"/*319 : 013F*/,
"Munja"/*320 : 0140*/,
"Chuchmur"/*321 : 0141*/,
"Ramboum"/*322 : 0142*/,
"Brouhabam"/*323 : 0143*/,
"Makuhita"/*324 : 0144*/,
"Hariyama"/*325 : 0145*/,
"Azurill"/*326 : 0146*/,
"Tarinor"/*327 : 0147*/,
"Skitty"/*328 : 0148*/,
"Delcatty"/*329 : 0149*/,
"Ténéfix"/*330 : 014A*/,
"Mysdibule"/*331 : 014B*/,
"Galekid"/*332 : 014C*/,
"Galegon"/*333 : 014D*/,
"Galeking"/*334 : 014E*/,
"Méditikka"/*335 : 014F*/,
"Charmina"/*336 : 0150*/,
"Dynavolt"/*337 : 0151*/,
"Elecsprint"/*338 : 0152*/,
"Posipi"/*339 : 0153*/,
"Négapi"/*340 : 0154*/,
"Muciole"/*341 : 0155*/,
"Lumivole"/*342 : 0156*/,
"Rosélia"/*343 : 0157*/,
"Gloupti"/*344 : 0158*/,
"Avaltout"/*345 : 0159*/,
"Carvanha"/*346 : 015A*/,
"Sharpedo"/*347 : 015B*/,
"Wailmer"/*348 : 015C*/,
"Wailord"/*349 : 015D*/,
"Chamallot"/*350 : 015E*/,
"Camérupt"/*351 : 015F*/,
"Chartor"/*352 : 0160*/,
"Spoink"/*353 : 0161*/,
"Groret"/*354 : 0162*/,
"Spinda"/*355 : 0163*/,
"Kraknoix"/*356 : 0164*/,
"Vibraninf"/*357 : 0165*/,
"Libégon"/*358 : 0166*/,
"Cacnea"/*359 : 0167*/,
"Cacturne"/*360 : 0168*/,
"Tylton"/*361 : 0169*/,
"Altaria"/*362 : 016A*/,
"Mangriff"/*363 : 016B*/,
"Séviper"/*364 : 016C*/,
"Séléroc"/*365 : 016D*/,
"Solaroc"/*366 : 016E*/,
"Barloche"/*367 : 016F*/,
"Barbicha"/*368 : 0170*/,
"Ecrapince"/*369 : 0171*/,
"Colhomard"/*370 : 0172*/,
"Balbuto"/*371 : 0173*/,
"Kaorine"/*372 : 0174*/,
"Lilia"/*373 : 0175*/,
"Vacilys"/*374 : 0176*/,
"Anorith"/*375 : 0177*/,
"Armaldo"/*376 : 0178*/,
"Barpau"/*377 : 0179*/,
"Milobellus"/*378 : 017A*/,
"Morphéo Forme Normale"/*379 : 017B*/,
"Morphéo Solaire"/*380 : 017C*/,
"Morphéo Eau de Pluie"/*381 : 017D*/,
"Morphéo Blizzard"/*382 : 017E*/,
"Kecleon (vert)"/*383 : 017F*/,
"Kecleon (violet)"/*384 : 0180*/,
"Polichombr"/*385 : 0181*/,
"Branette"/*386 : 0182*/,
"Skelénox"/*387 : 0183*/,
"Téraclope"/*388 : 0184*/,
"Tropius"/*389 : 0185*/,
"Eoko"/*390 : 0186*/,
"Absol"/*391 : 0187*/,
"Okéoké"/*392 : 0188*/,
"Stalgamin"/*393 : 0189*/,
"Oniglali"/*394 : 018A*/,
"Obalie"/*395 : 018B*/,
"Phogleur"/*396 : 018C*/,
"Kaimorse"/*397 : 018D*/,
"Coquiperl"/*398 : 018E*/,
"Serpang"/*399 : 018F*/,
"Rosabyss"/*400 : 0190*/,
"Relicanth"/*401 : 0191*/,
"Lovdisc"/*402 : 0192*/,
"Draby"/*403 : 0193*/,
"Drackhaus"/*404 : 0194*/,
"Drattak"/*405 : 0195*/,
"Terhal"/*406 : 0196*/,
"Métang"/*407 : 0197*/,
"Métalosse"/*408 : 0198*/,
"Regirock"/*409 : 0199*/,
"Regice"/*410 : 019A*/,
"Registeel"/*411 : 019B*/,
"Latias"/*412 : 019C*/,
"Latios"/*413 : 019D*/,
"Kyogre"/*414 : 019E*/,
"Groudon"/*415 : 019F*/,
"Rayquaza"/*416 : 01A0*/,
"Jirachi"/*417 : 01A1*/,
"Deoxys"/*418 : 01A2*/,
"Deoxys"/*419 : 01A3*/,
"Deoxys"/*420 : 01A4*/,
"Deoxys"/*421 : 01A5*/,
"Tortipouss"/*422 : 01A6*/,
"Boskara"/*423 : 01A7*/,
"Torterra"/*424 : 01A8*/,
"Ouisticram"/*425 : 01A9*/,
"Chimpenfeu"/*426 : 01AA*/,
"Simiabraz"/*427 : 01AB*/,
"Tiplouf"/*428 : 01AC*/,
"Prinplouf"/*429 : 01AD*/,
"Pingoléon"/*430 : 01AE*/,
"Etourmi"/*431 : 01AF*/,
"Etourvol"/*432 : 01B0*/,
"Etouraptor"/*433 : 01B1*/,
"Keunotor"/*434 : 01B2*/,
"Castorno"/*435 : 01B3*/,
"Crikzik"/*436 : 01B4*/,
"Mélokrik"/*437 : 01B5*/,
"Lixy"/*438 : 01B6*/,
"Luxio"/*439 : 01B7*/,
"Luxray"/*440 : 01B8*/,
"Rozbouton"/*441 : 01B9*/,
"Roserade"/*442 : 01BA*/,
"Kranidos"/*443 : 01BB*/,
"Charkos"/*444 : 01BC*/,
"Dinoclier"/*445 : 01BD*/,
"Bastiodon"/*446 : 01BE*/,
"Cheniti"/*447 : 01BF*/,
"Cheniti"/*448 : 01C0*/,
"Cheniti"/*449 : 01C1*/,
"Cheniselle"/*450 : 01C2*/,
"Cheniselle"/*451 : 01C3*/,
"Cheniselle"/*452 : 01C4*/,
"Papilord"/*453 : 01C5*/,
"Apitrini"/*454 : 01C6*/,
"Apireine"/*455 : 01C7*/,
"Pachirisu"/*456 : 01C8*/,
"Mustébouée"/*457 : 01C9*/,
"Mustéflott"/*458 : 01CA*/,
"Ceribou"/*459 : 01CB*/,
"Ceriflor"/*460 : 01CC*/,
"Ceriflor"/*461 : 01CD*/,
"Sancoki"/*462 : 01CE*/,
"Sancoki"/*463 : 01CF*/,
"Tritosor"/*464 : 01D0*/,
"Tritosor"/*465 : 01D1*/,
"Capidextre"/*466 : 01D2*/,
"Baudrive"/*467 : 01D3*/,
"Grodrive"/*468 : 01D4*/,
"Laporeille"/*469 : 01D5*/,
"Lockpin"/*470 : 01D6*/,
"Magirêve"/*471 : 01D7*/,
"Corboss"/*472 : 01D8*/,
"Chaglam"/*473 : 01D9*/,
"Chaffreux"/*474 : 01DA*/,
"Korillon"/*475 : 01DB*/,
"Moufouette"/*476 : 01DC*/,
"Moufflair"/*477 : 01DD*/,
"Archéomire"/*478 : 01DE*/,
"Archéodong"/*479 : 01DF*/,
"Manza\357"/*480 : 01E0*/,
"Mime Jr."/*481 : 01E1*/,
"Ptiravi"/*482 : 01E2*/,
"Pijako"/*483 : 01E3*/,
"Spiritomb"/*484 : 01E4*/,
"Griknot"/*485 : 01E5*/,
"Carmache"/*486 : 01E6*/,
"Carchacrok"/*487 : 01E7*/,
"Goinfrex"/*488 : 01E8*/,
"Riolu"/*489 : 01E9*/,
"Lucario"/*490 : 01EA*/,
"Hippopotas"/*491 : 01EB*/,
"Hippodocus"/*492 : 01EC*/,
"Rapion"/*493 : 01ED*/,
"Drascore"/*494 : 01EE*/,
"Cradopaud"/*495 : 01EF*/,
"Coatox"/*496 : 01F0*/,
"Vortente"/*497 : 01F1*/,
"Ecayon"/*498 : 01F2*/,
"Luminéon"/*499 : 01F3*/,
"Babimanta"/*500 : 01F4*/,
"Blizzi"/*501 : 01F5*/,
"Blizzaroi"/*502 : 01F6*/,
"Dimoret"/*503 : 01F7*/,
"Magnézone"/*504 : 01F8*/,
"Coudlangue"/*505 : 01F9*/,
"Rhinastoc"/*506 : 01FA*/,
"Bouldeneu"/*507 : 01FB*/,
"Elekable"/*508 : 01FC*/,
"Maganon"/*509 : 01FD*/,
"Togekiss"/*510 : 01FE*/,
"Yanmega"/*511 : 01FF*/,
"Phyllali"/*512 : 0200*/,
"Givrali"/*513 : 0201*/,
"Scorvol"/*514 : 0202*/,
"Mammochon"/*515 : 0203*/,
"Porygon-Z"/*516 : 0204*/,
"Gallame"/*517 : 0205*/,
"Tarinorme"/*518 : 0206*/,
"Noctunoir"/*519 : 0207*/,
"Momartik"/*520 : 0208*/,
"Motisma"/*521 : 0209*/,
"Créhelf"/*522 : 020A*/,
"Créfollet"/*523 : 020B*/,
"Créfadet"/*524 : 020C*/,
"Dialga"/*525 : 020D*/,
"Palkia"/*526 : 020E*/,
"Heatran"/*527 : 020F*/,
"Regigigas"/*528 : 0210*/,
"Giratina"/*529 : 0211*/,
"Cresselia"/*530 : 0212*/,
"Phione"/*531 : 0213*/,
"Manaphy"/*532 : 0214*/,
"Darkrai"/*533 : 0215*/,
"??????????"/*534 : 0216*/,
"??????????"/*535 : 0217*/,
"??????????"/*536 : 0218*/,
"??????????"/*537 : 0219*/,
"??????????"/*538 : 021A*/,
"??????????"/*539 : 021B*/,
"??????????"/*540 : 021C*/,
"??????????"/*541 : 021D*/,
"??????????"/*542 : 021E*/,
"??????????"/*543 : 021F*/,
"??????????"/*544 : 0220*/,
"??????????"/*545 : 0221*/,
"??????????"/*546 : 0222*/,
"??????????"/*547 : 0223*/,
"??????????"/*548 : 0224*/,
"??????????"/*549 : 0225*/,
"??????????"/*550 : 0226*/,
"??????????"/*551 : 0227*/,
"Dialga"/*552 : 0228*/,
"Leurre"/*553 : 0229*/,
"Statue"/*554 : 022A*/,
"Grodoudou"/*555 : 022B*/,
"Regigigas"/*556 : 022C*/,
"Archéodong"/*557 : 022D*/,
"Kicklee"/*558 : 022E*/,
"Eoko"/*559 : 022F*/,
"Grodoudou"/*560 : 0230*/,
"Créhelf"/*561 : 0231*/,
"Créfadet"/*562 : 0232*/,
"Créfollet"/*563 : 0233*/,
"Héliatronc"/*564 : 0234*/,
"Taupiqueur"/*565 : 0235*/,
"Triopikeur"/*566 : 0236*/,
"Ecrapince"/*567 : 0237*/,
"Ramboum"/*568 : 0238*/,
"Keunotor"/*569 : 0239*/,
"Pijako"/*570 : 023A*/,
"Massko"/*571 : 023B*/,
"Noctunoir"/*572 : 023C*/,
"Ténéfix"/*573 : 023D*/,
"Darkrai"/*574 : 023E*/,
"reserve_21"/*575 : 023F*/,
"reserve_22"/*576 : 0240*/,
"reserve_23"/*577 : 0241*/,
"reserve_24"/*578 : 0242*/,
"reserve_25"/*579 : 0243*/,
"reserve_26"/*580 : 0244*/,
"reserve_27"/*581 : 0245*/,
"reserve_28"/*582 : 0246*/,
"reserve_29"/*583 : 0247*/,
"reserve_30"/*584 : 0248*/,
"reserve_31"/*585 : 0249*/,
"reserve_32"/*586 : 024A*/,
"reserve_33"/*587 : 024B*/,
"reserve_34"/*588 : 024C*/,
"reserve_35"/*589 : 024D*/,
"reserve_36"/*590 : 024E*/,
"reserve_37"/*591 : 024F*/,
"reserve_38"/*592 : 0250*/,
"reserve_39"/*593 : 0251*/,
"reserve_40"/*594 : 0252*/,
"reserve_41"/*595 : 0253*/,
"reserve_42"/*596 : 0254*/,
"reserve_43"/*597 : 0255*/,
"reserve_44"/*598 : 0256*/,
"reserve_45"/*599 : 0257*/
]


}