require 'open-uri'

# art 1
art = Art.new(artist_id: 1, title:"StarRacerX", description:"Created with 3ds Max and Substance Painter")
art.save!
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/RSIWIPShip.PNG')
if file
  art.artpanels.attach(io: file, filename: 'RSIWIPShip.PNG')
  file = nil
end
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/jetgreybox.png')
if file
  art.artpanels.attach(io: file, filename: 'jetgreybox.png')
  file = nil
end
art = nil

# art 2
art = Art.create!(artist_id: 2, title:"Coffee Bacon", description:"Animated Logo")
art.save!
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/coffeebaconStillFrame.png')
if file
  art.artpanels.attach(io: file, filename: 'coffeebaconStillFrame.png')
  file = nil
end
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/coffeebacon.gif')
if file
  art.artpanels.attach(io: file, filename: 'coffeebacon.gif')
  file = nil
end
art = nil

# 3
art = Art.create!(artist_id: 3, title:"Game Board", description:"Board game pieces that can be moved around to create new layouts")
art.save!
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/Board.jpg')
if file
  art.artpanels.attach(io: file, filename: 'Board.jpg')
  file = nil
end
art = nil



# 4
art = Art.create!(artist_id: 4, title:"Military Crate", description:"3ds Max box-modeling literal. Painted and rendered in Substance Painter")
art.save!
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/CrateStorageMilitaryRender.PNG')
if file
  art.artpanels.attach(io: file, filename: 'CrateStorageMilitaryRender.PNG')
  file = nil
end
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/CrateStorageMilitary.png')
if file
  art.artpanels.attach(io: file, filename: 'CrateStorageMilitary.png')
  file = nil
end
art = nil

# 5
art = Art.create!(artist_id: 5, title:"2AbTool", description:"Product render for a multi-tool concept. Modeled in 3ds max. Rendered in Photoshop")
art.save!
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/2AbTool.jpg')
if file
  art.artpanels.attach(io: file, filename: '2AbTool.jpg')
  file = nil
end
art = nil

# 6
art = Art.create!(artist_id: 6, title:"Terracatta", description:"A terracotta concept I drew in 5 seconds and I liked it a lot so I'm modeling it. Topology practise. 3DS Max")
art.save!
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/terracatta.JPG')
if file
  art.artpanels.attach(io: file, filename: 'terracatta.JPG')
  file = nil
end
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/napkinart.PNG')
if file
  art.artpanels.attach(io: file, filename: 'napkinart.PNG')
  file = nil
end
art = nil

# 7
art = Art.create!(artist_id: 7, title:"Zombies in 5 seconds", description:"Blasting through some iterations of simple zombie designs for an animated short. The design we landed on was very square.")
art.save!
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/ZombieIteration1.PNG')
if file
  art.artpanels.attach(io: file, filename: 'ZombieIteration1.PNG')
  file = nil
end
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/ZombieIteration2.PNG')
if file
  art.artpanels.attach(io: file, filename: 'ZombieIteration2.PNG')
  file = nil
end
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/ZombieIteration3.PNG')
if file
  art.artpanels.attach(io: file, filename: 'ZombieIteration3.PNG')
  file = nil
end
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/zombie1.PNG')
if file
  art.artpanels.attach(io: file, filename: 'zombie1.PNG')
  file = nil
end
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/zombie2.PNG')
if file
  art.artpanels.attach(io: file, filename: 'zombie2.PNG')
  file = nil
end
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/zombiecakes.PNG')
if file
  art.artpanels.attach(io: file, filename: 'zombiecakes.PNG')
  file = nil
end
art = nil


# 8
art = Art.create!(artist_id: 8, title:"Foliage Brush Test", description:"Learning Maya's foliage brushes. There's an animated version, will upload later.")
art.save!
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/tree_foliage.JPG')
if file
  art.artpanels.attach(io: file, filename: 'tree_foliage.JPG')
  file = nil
end
art = nil

# 9
art = Art.create!(artist_id: 9, title:"Speed Racer's Speeder", description:"3DS Max, Substance Painter. Working from reference. Star Wars speeder with Speed Racer's colorscheme")
art.save!
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/Speeder+Speed+Racer.PNG')
if file
  art.artpanels.attach(io: file, filename: 'Speeder+Speed+Racer.PNG')
  file = nil
end
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/Speeder+model+final.PNG')
if file
  art.artpanels.attach(io: file, filename: 'Speeder+model+final.PNG')
  file = nil
end
art = nil

# 10
art = Art.create!(artist_id: 1, title:"WIP Planet Lander", description:"Work in progress. 3ds max. Mobile Base / Shuttle")
art.save!
file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/spikymobilebase.png')
if file
  art.artpanels.attach(io: file, filename: 'spikymobilebase.png')
  file = nil
end
art = nil


# # 11
# art = Art.create!(artist_id: 3, title:"HellScape Rulebook", description:"Prints for the Hell-Scape rulebook")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/RulebookCover.jpg')
# if file
#   art.artpanels.attach(io: file, filename: 'RulebookCover.jpg')
#   file = nil
# end
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/RulebookInsideCoverPages1%266.jpg')
# if file
#   art.artpanels.attach(io: file, filename: 'RulebookInsideCoverPages1%266.jpg')
#   file = nil
# end
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/RulebookPages2%265.jpg')
# if file
#   art.artpanels.attach(io: file, filename: 'RulebookPages2%265.jpg')
#   file = nil
# end
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/RulebookPages3%264.jpg')
# if file
#   art.artpanels.attach(io: file, filename: 'RulebookPages3%264.jpg')
#   file = nil
# end
# art = nil


# # 12
# art = Art.create!(artist_id: 2, title:"Super Smooth Racer", description:"Final Render V2")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/SS+Vehicle+1.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'SS+Vehicle+1.PNG')
#   file = nil
# end
# art = nil


# # 13
# art = Art.create!(artist_id: 1, title:"Unity Scene", description:"Unity project with my lander")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/unity+scene.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'unity+scene.PNG')
#   file = nil
# end
# art = nil



# # 14
# art = Art.create!(artist_id: 5, title:"Gothic Heel", description:"Recreation from one reference image. 3DS Max. Modeled with splines")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/objectrecreation1.JPG')
# if file
#   art.artpanels.attach(io: file, filename: 'objectrecreation1.JPG')
#   file = nil
# end
# art = nil



# # 15
# art = Art.create!(artist_id: 6, title:"Zbrush practise", description:"blocking out a character in Zbrush. Still trying to get a handle on the tools and ui.")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/day1concept.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'day1concept.PNG')
#   file = nil
# end
# art = nil



# # 16
# art = Art.create!(artist_id: 4, title:"catapult", description:"")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/CatapultStillFrame.png')
# if file
#   art.artpanels.attach(io: file, filename: 'CatapultStillFrame.png')
#   file = nil
# end
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/Catapult.gif')
# if file
#   art.artpanels.attach(io: file, filename: 'Catapult.gif')
#   file = nil
# end
# art = nil

# # 17
# art = Art.create!(artist_id: 7, title:"Lathe Tool", description:"day 2 modeling. 3DS Max")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/Bottles%26Wineglasses.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'Bottles%26Wineglasses.PNG')
#   file = nil
# end
# art = nil


# # 18
# art = Art.create!(artist_id: 7, title:"Primitive Objects", description:"day 1 modeling. 3DS Max")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/SnowmanRender1.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'SnowmanRender1.PNG')
#   file = nil
# end
# art = nil


# # 19
# art = Art.create!(artist_id: 6, title:"Flytrap Monster", description:"")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/Kalvin.png')
# if file
#   art.artpanels.attach(io: file, filename: 'Kalvin.png')
#   file = nil
# end
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/Kalvin2.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'Kalvin2.PNG')
#   file = nil
# end
# art = nil


# # 20
# art = Art.create!(artist_id: 6, title:"Pose Scene With Flytrap", description:"")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/Kalvin+and+rock+creature.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'Kalvin+and+rock+creature.PNG')
#   file = nil
# end
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/KalvinTest.png')
# if file
#   art.artpanels.attach(io: file, filename: 'KalvinTest.png')
#   file = nil
# end
# art = nil

# # 21
# art = Art.create!(artist_id: 5, title:"Naval Ship Bridge", description:"")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/InteriorFinalRender.png')
# if file
#   art.artpanels.attach(io: file, filename: 'InteriorFinalRender.png')
#   file = nil
# end
# art = nil



# # 22
# art = Art.create!(artist_id: 3, title:"self portrait GoogleBrush", description:"painting in VR with google brush. It's a dream but also a nightmare. True Duality of software.")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/googlebrushart.JPG')
# if file
#   art.artpanels.attach(io: file, filename: 'googlebrushart.JPG')
#   file = nil
# end
# art = nil


# # 23
# art = Art.create!(artist_id: 3, title:"World Design World Snapshop", description:"more googlebrush")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/planetbullet.png')
# if file
#   art.artpanels.attach(io: file, filename: 'planetbullet.png')
#   file = nil
# end
# art = nil


# # 24
# art = Art.create!(artist_id: 3, title:"World Design World Map", description:"")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/World+Map.jpg')
# if file
#   art.artpanels.attach(io: file, filename: 'World+Map.jpg')
#   file = nil
# end
# art = nil


# # 25
# art = Art.create!(artist_id: 8, title:"Shrog", description:"It's a Shark, it's a frog.")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/Shrog3.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'Shrog3.PNG')
#   file = nil
# end
# art = nil


# # 26
# art = Art.create!(artist_id: 6, title:"Self Portrait", description:"Me in 50 years")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/selfportrait.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'selfportrait.PNG')
#   file = nil
# end
# art = nil


# # 27
# art = Art.create!(artist_id: 7, title:"Box Modeling", description:"")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/RailCar2.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'RailCar2.PNG')
#   file = nil
# end
# art = nil


# # 28
# art = Art.create!(artist_id: 7, title:"Floor Plan", description:"")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/roomRemodel.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'roomRemodel.PNG')
#   file = nil
# end
# art = nil


# # 29
# art = Art.create!(artist_id: 9, title:"MegamanX Mech", description:"Group project. I Modeled everything in 3ds max. Teammates textured in ... MudBox ?")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/Mech+full+2.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'Mech+full+2.PNG')
#   file = nil
# end
# art = nil


# # 30
# art = Art.create!(artist_id: 7, title:"Disaster Piece", description:"Diorama of post earthquake scene")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/DistasterPiece.png')
# if file
#   art.artpanels.attach(io: file, filename: 'DistasterPiece.png')
#   file = nil
# end
# art = nil


# # 31
# art = Art.create!(artist_id: 6, title:"Kobald", description:"")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/lizardman.jpg')
# if file
#   art.artpanels.attach(io: file, filename: 'lizardman.jpg')
#   file = nil
# end
# art = nil

# # 32
# art = Art.create!(artist_id: 7, title:"UV Unwrap", description:"Am I doing this right? It's spread out evenly but my colleagues say the boxes should all run orthagonally. But then I'd have empty spaces!")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/BoltActionRifleUVWunrapmap2.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'BoltActionRifleUVWunrapmap2.PNG')
#   file = nil
# end
# art = nil

# # 33
# art = Art.create!(artist_id: 7, title:"Goldpot Trollman", description:"")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/napkinartkremlin.JPG')
# if file
#   art.artpanels.attach(io: file, filename: 'napkinartkremlin.JPG')
#   file = nil
# end
# art = nil

# # 34
# art = Art.create!(artist_id: 3, title:"Here comes doctor manhattan", description:"")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/blueguybreakswall.jpg')
# if file
#   art.artpanels.attach(io: file, filename: 'blueguybreakswall.jpg')
#   file = nil
# end
# art = nil

# # 35
# art = Art.create!(artist_id: 8, title:"Monster Bean Bag", description:"")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/baghead2.PNG')
# if file
#   art.artpanels.attach(io: file, filename: 'baghead2.PNG')
#   file = nil
# end
# art = nil

# # 36
# art = Art.create!(artist_id: 1, title:"vr headset", description:"funny concept from ~2015 but I think the formfactor is basically where we're going")
# art.save!
# file = open('https://artcoag-seeds.s3.us-west-1.amazonaws.com/arts/Headset+2.png')
# if file
#   art.artpanels.attach(io: file, filename: 'Headset+2.png')
#   file = nil
# end
# art = nil


# art = Art.create!(artist_id: , title:"", description:"")
# art.save!
# file = open('')
# if file
#   art.artpanels.attach(io: file, filename: '')
#   file = nil
# end
# art = nil