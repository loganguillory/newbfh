# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Clearing old data..."
Designer.destroy_all
Favorite.destroy_all
Item.destroy_all
ShoppingCart.destroy_all
User.destroy_all 


puts "Creating Users..."
u1 = User.create(full_name: "Logan Guillory", email: "Logan@BFH.com", username: "Logan27", password_digest: "BFH123", admin: true)
u2 = User.create(full_name: "Beyonce Knowles", email: "Beyonce@parkwoodent.com", username: "Beyonce", password_digest: "Bday4", admin: false)
u3 = User.create(full_name: "Courtney Blackwell", email: "Cobee337@gmail.com", username: "co_bee", password_digest: "laffytaffy337", admin: false)

puts "creating Designers..."
d1 = Designer.create(name: "Abdul Abasi", url: "https://abasirosborough.com/")
d2 = Designer.create(name: "Adama Amanda Ndiaye", url:"https://adamaparis.com/index.php/fr/" )
d3 = Designer.create(name: "Ade Hassan", url:"https://www.nubianskin.com/")
d4 = Designer.create(name: "Akua Shabaka", url:"https://houseofaama.com/")
d5 = Designer.create(name: "Amsale Aberra", url: "https://amsale.com/" )
d6 = Designer.create(name: "Amina Muaddi", url: "https://www.aminamuaddi.com/")
d7 = Designer.create(name: "Andrea Iyamah", url: "https://www.andreaiyamah.com/")
d8 = Designer.create(name: "Anifa Mvuemba", url:"https://hanifa.co/")
d9 = Designer.create(name: "Bernard James", url: "https://bernardjames.com/")
d10 = Designer.create(name: "Blakely Thornton", url: "https://civiljewelry.com/")
d11 = Designer.create(name: "Bianca Abreau", url: "https://aurjewelry.com/")
d12 = Designer.create(name: "Bianca Saunders", url: "https://www.biancasaunders.com/")
d13 = Designer.create(name: "Brandee Godwin", url: "https://apartment202.co/")
d14 = Designer.create(name: "Brandon Blackwood", url: "https://brandonblackwood.com/")
d15 = Designer.create(name: "Byron and Dexter Peart", url: "https://www.wantlesessentiels.com/")
d16 = Designer.create(name: "CD Greene", url: "https://www.cdgreene.com/")
d17 = Designer.create(name: "Charles Harbison", url:"https://harbison.studio/")
d18 = Designer.create(name: "Christopher John Rogers", url: "https://christopherjohnrogers.com/")
d19 = Designer.create(name: "Claude Kameni", url: "https://claudekameni.com/")
d20 = Designer.create(name: "Coco + Breezy Dotsont", url:"https://cocoandbreezy.com/")
d21 = Designer.create(name: "Dani Evans", url: "https://monrowenyc.com/")
d22 = Designer.create(name: "Dapper Dan", url: "https://dapperdanofharlem.com/")
d23 = Designer.create(name: "Don C", url:"https://justdon.com/")
d24 = Designer.create(name: "Ev Bravado", url:"https://whodecideswar.com/")
d25 = Designer.create(name: "Edna Konadu", url:"https://www.ampmlondon.com/")
d26 = Designer.create(name: "Edvin Thompson", url:"https://theophilio.com/")
d27 = Designer.create(name: "Fe Noel", url:"https://fenoel.com/")
d28 = Designer.create(name: "Fisayo Longe", url: "https://kaicollective.com/en-us")
d29 = Designer.create(name: "Grace Wales Bonner", url: "https://walesbonner.net/")
d30 = Designer.create(name: "Heron Preston", url:"https://www.heronpreston.com/en-us/")
d31 = Designer.create(name: "Hussein Suleiman", url:"https://us.dailypaperclothing.com/")
d32 = Designer.create(name: "Isaia Rankin (1954-1989)", url:"")
d33 = Designer.create(name: "James Flemons", url:"https://phlemuns.com/")
d34 = Designer.create(name: "Jerry Lorenzo", url:"https://fearofgod.com/")
d35 = Designer.create(name: "Jenni Kaufusi", url: "https://stellaandhaas.com/")
d36 = Designer.create(name: "Jessica Rich", url: "https://jessicarich.com/")
d37 = Designer.create(name: "Johnny Nelson", url: "https://johnnynelson.nyc/")
d38 = Designer.create(name: "Jusme Kamil", url: "https://thenubamboo.com/")
d39 = Designer.create(name: "Karl Kani", url: "https://www.karlkani.com/")
d40 = Designer.create(name: "Kacey Lynch", url: "https://bricksandwood.us/")
d41 = Designer.create(name: "Kanye West", url: "https://www.yeezysupply.com/")
d42 = Designer.create(name: "Kendall Reynolds", url:"https://www.kendallmilesdesigns.com/")
d43 = Designer.create(name: "Kerby Jean-Raymond", url:"https://www.pyermoss.com/")
d44 = Designer.create(name: "Lani Nesbit", url:"https://www.jlanijewels.com/")
d45 = Designer.create(name: "LaQuan Smith", url:"https://laquansmith.com/")
d46 = Designer.create(name: "Latoia Fitzgerald", url:"https://lionneclothing.com/")
d47 = Designer.create(name: "Leomie Anderson", url:"https://www.lappthebrand.com/")
d48 = Designer.create(name: "Lorraine West", url:"https://lorrainewestjewelry.com/")
d49 = Designer.create(name: "Matthew Harris", url:"https://mateonewyork.com/")
d50 = Designer.create(name: "Melissa Simone-Hartman", url:"https://www.simon-hartman.com/")
d51 = Designer.create(name: "Mowalola Ogunlesi", url:"https://www.mowalola.com/")
d52 = Designer.create(name: "Moya Annece", url:"https://www.ashya.co/")
d53 = Designer.create(name: "Nneka C. Alexander", url:"https://www.bridesbynona.com/")
d54 = Designer.create(name: "Nicole Zizi", url:"https://nicolezizistudio.com/")
d55 = Designer.create(name: "Ola and Cerise Alabi", url:"https://coldlaundry.com/password")
d56 = Designer.create(name: "Olivia Anthony", url:"https://livstreetwear.com/")
d57 = Designer.create(name: "Omar Salam", url:"https://www.sukeina.co/")
d58 = Designer.create(name: "Opeyemi Omojola", url:"https://octavejewelry.com/")
d59 = Designer.create(name: "Ozwald Boateng", url:"https://www.ozwaldboateng.co.uk/")
d60 = Designer.create(name: "Pierre Bassene", url:"https://pierrebassene.world/password")
d61 = Designer.create(name: "Pierre Davis", url:"https://www.nosesso.la/")
d62 = Designer.create(name: "Patrick Kelly (1954-1990)", url:"")
d63 = Designer.create(name: "Patrick Robinson", url:"https://paskho.com/")
d64 = Designer.create(name: "Rodney Patterson", url:"https://www.esenshel.com/")
d65 = Designer.create(name: "Rebecca Allen", url:"https://rebecca-allen.com/")
d66 = Designer.create(name: "Reuben Reuel", url:"https://www.demestik.com/")
d67 = Designer.create(name: "Rihanna Robyn Fenty", url:"https://www.savagex.com/")
d68 = Designer.create(name: "Romeo Hunte", url:"https://www.romeohunte.com/")
d69 = Designer.create(name: "Roman Sipe", url:"https://menagerieintimates.com/")
d70 = Designer.create(name: "Ruth E. Carter", url:"https://www.ruthecarter.com/")
d71 = Designer.create(name: "Sade Mims", url:"https://edas.store/")
d72 = Designer.create(name: "Salehe Bembury", url:"https://www.salehebembury.com/")
d73 = Designer.create(name: "Salone Monet Johnson", url:"https://salonemonet.com/")
d74 = Designer.create(name: "Sean Brown", url:"https://curvesbyseanbrown.com/shop")
d75 = Designer.create(name: "Sergio Hudson", url:"https://sergiohudson.com/")
d76 = Designer.create(name: "Sunni Dixon", url:"https://www.sunnisunni.com/")
d78 = Designer.create(name: "Taofeek Abijako", url:"https://www.headofstateny.com/")
d79 = Designer.create(name: "Telfar Clemens", url:"https://telfar.net/")
d80 = Designer.create(name: "Tejahn Burnett", url:"https://tejahnburnett.com/")
d81 = Designer.create(name: "Tia Adeola", url:"https://www.tiaadeola.com/")
d82 = Designer.create(name: "Titi Adesa", url:"https://titiadesa.com/")
d83 = Designer.create(name: "Valerie Madison", url:"https://www.valeriemadison.com/")
d84 = Designer.create(name: "Valentine Avoh", url:"https://www.valentineavoh.com/")
d85 = Designer.create(name: "Virgil Abloh", url:"https://www.off---white.com/en-us/")
d86 = Designer.create(name: "Wanda Lephoto", url:"https://www.instagram.com/wandalephoto/")
d87 = Designer.create(name: "William Okpo", url:"https://williamokpo.com/")
d88 = Designer.create(name: "Willi Smith (1948-1987)", url:"")
d89 = Designer.create(name: "Zainab Ashadu", url:"https://zashadu.com/")
d90 = Designer.create(name: "Zelda Wynn Valdes (1905-2001)", url:"")
d91 = Designer.create(name: "Zerina Akers", url:"https://www.zerinaakers.com/")
d92 = Designer.create(name: "Black Fashion House", url: "https://www.blackfashionfair.org/fashion-fair")

puts "creating Favorites..."
f1 = Favorite.create(user: u2, designer: d14)
f2 = Favorite.create(user: u2, designer: d75)
f3 = Favorite.create(user: u3, designer: d29)
f4 = Favorite.create(user: u3, designer: d79)
f5 = Favorite.create(user: u3, designer: d75)
f6 = Favorite.create(user: u2, designer: d45)


puts "creating Items..."
i1 = Item.create!(item_name:"House of Aama x Gianni Lee Studio", price: 950.00, description: "Sea Spirit Button Up Shirt", in_stock: true, designer: d4, user_id: u2, image:"https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/1654453704052-MXLZYUNQ8ASPIKR7QO0D/HOA004.jpg?format=750w")
i2 = Item.create(item_name:"House of Aama x Gianni Lee Studio", price: 350.00, description: "Sea Spirit Silk Sarong", in_stock: true, designer: d4, user_id: u3, image:"https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/1657375316210-NW6XKVJVVYNQPS6GQGZI/HOA+001.jpg?format=300w")
i3 = Item.create(item_name:"House of Aama x Gianni Lee Studio", price: 390.00, description: "Sea Spirit Turtleneck" , in_stock: true, designer: d4, user_id: u2, image:"https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/1657375455787-MDZ6JAMKNVF86THNQ54V/HOA006.jpg?format=750w")
i4 = Item.create(item_name:"House of Aama x Gianni Lee Studio" , price:220.00, description: "Sea Spirit Silk Scarf", in_stock: true, designer: d4, user_id: u3, image:"https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/1657376921704-9IVHRS3U1I8T1XNFFFY6/HOAS2.jpg?format=300w")
i5 = Item.create(item_name:"Brandon Blackwood", price:375.00, description:"Bamboo B Tote", in_stock: true, designer: d14, user_id: u3, image:"https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/1649220355459-SSVGFASN2DD4ACPXQ297/BBWOODBLACKBB2.jpg?format=750w")
i6 = Item.create(item_name:"Brandon Blackwood" , price:375.00 , description:"Bamboo B Tote" , in_stock: false, designer: d14, user_id: u2, image:"https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/1649220455154-2ESYLFKCDN5RZ33CXNOA/BBAMBOOBLACK.jpg?format=750w")
i7 = Item.create(item_name:"BFH Mag", price: 95.00, description:"Black Fashion House Volume 0: SEEN (Special Edition)", in_stock: true, designer: d92, user_id: u2, image:"https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/1648784843631-33H0IC9QUBF3GHXVUU3P/BFFV0AMBER.jpg?format=750w")
i8 = Item.create(item_name:"BFH Mag", price: 95.00, description:"Black Fashion House Volume 0: SEEN (Limited Edition Pyer Mosss)", in_stock: true, designer: d92, user_id: u2, image:"https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/1648785010999-BE6IKKUNIMOI578008QJ/BFFV0ABDMPM.jpg?format=750w")
i9 = Item.create(item_name:"BFH Mag", price: 95.00, description:"Black Fashion House Volume 0: SEEN (Limited Edition Theophilio)", in_stock: false, designer: d92, user_id: u3, image:"https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/1648817291553-I4GSPPSS05QYTU48SJ7P/BFFV0QUILLEMONS.jpg?format=750w")
i10 = Item.create(item_name:"BFH Mag", price: 95.00, description: "Black Fashion House Volume 0: SEEN (Limited Edition Sergio Hudson)", in_stock: false, designer: d92, user_id: u2, image:"https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/1648785075767-WGZOU6X6TPWIPT2PKQYD/BFFV0ABDMSH.jpg?format=750w")



puts "creating shopping cart..."
s1 = ShoppingCart.create(user_id: u2.id , item_id: i2.id )
s2 = ShoppingCart.create(user_id: u3.id , item_id: i5.id )



