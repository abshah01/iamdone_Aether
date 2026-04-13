const quotes = [
    { title: "Day 1", text: "The sun does not ask for permission to rise." },
    { title: "Day 2", text: "Your heartbeat is a drum calling you to battle." },
    { title: "Day 3", text: "Every breath is a fresh inkwell for your story." },
    { title: "Day 4", text: "The stars only shine because they refuse to be dark." },
    { title: "Day 5", text: "You are the architect of your own internal light." },
    { title: "Day 6", text: "Roots grow deepest in the coldest of winters." },
    { title: "Day 7", text: "Silence is often the soil where greatness begins." },
    { title: "Day 8", text: "Do not fear the mountain; it is merely a ladder." },
    { title: "Day 9", text: "Your scars are maps of wars you have already won." },
    { title: "Day 10", text: "The horizon is a promise, not a boundary." },
    { title: "Day 11", text: "Even the smallest spark can terrify the shadows." },
    { title: "Day 12", text: "Waves do not break; they simply reinvent themselves." },
    { title: "Day 13", text: "You are made of the same dust as the galaxies." },
    { title: "Day 14", text: "Patience is the art of trusting your own timing." },
    { title: "Day 15", text: "A closed door is often a redirection to a palace." },
    { title: "Day 16", text: "Speak your truth until your voice stops shaking." },
    { title: "Day 17", text: "The wind doesn’t stop for the trees; it dances." },
    { title: "Day 18", text: "Be the storm that clears the air for others." },
    { title: "Day 19", text: "Your worth is not a currency that others can spend." },
    { title: "Day 20", text: "Bloom where you are planted, then spread your seeds." },
    { title: "Day 21", text: "The moon is whole even when it is hidden." },
    { title: "Day 22", text: "Effort is the bridge between dreaming and having." },
    { title: "Day 23", text: "Kindness is a wildfire that heals instead of burns." },
    { title: "Day 24", text: "You are the ocean, not just a single drop." },
    { title: "Day 25", text: "To fall is human; to rise is divine." },
    { title: "Day 26", text: "Let your passion be louder than your fears." },
    { title: "Day 27", text: "The heavy rain only prepares the earth for green." },
    { title: "Day 28", text: "Gold must face the fire to find its purity." },
    { title: "Day 29", text: "Your potential is an infinite, unmapped map." },
    { title: "Day 30", text: "Stop looking at the clock and look at the sky." },
    { title: "Day 31", text: "Every 'no' brings you closer to the right 'yes'." },
    { title: "Day 32", text: "The eagle doesn't fear the height; it craves it." },
    { title: "Day 33", text: "Your mind is a garden; pull the weeds of doubt." },
    { title: "Day 34", text: "Softness is a strength in a world made of stone." },
    { title: "Day 35", text: "The path is made by walking, not by wishing." },
    { title: "Day 36", text: "Light always finds the cracks in the armor." },
    { title: "Day 37", text: "You are the protagonist of a legendary tale." },
    { title: "Day 38", text: "Doubt is a ghost that disappears when challenged." },
    { title: "Day 39", text: "Hunger for growth is the most honest prayer." },
    { title: "Day 40", text: "Yesterday is a ghost; tomorrow is a vision." },
    { title: "Day 41", text: "Today is the only tool you truly hold." },
    { title: "Day 42", text: "Forgive yourself for the versions you used to be." },
    { title: "Day 43", text: "A river cuts through rock by persistence, not power." },
    { title: "Day 44", text: "Your soul is a compass that never truly breaks." },
    { title: "Day 45", text: "High tides are coming to lift your heavy ship." },
    { title: "Day 46", text: "Courage is acting while your knees are trembling." },
    { title: "Day 47", text: "You were not born to blend into the gray." },
    { title: "Day 48", text: "Each morning is a mercy you must seize." },
    { title: "Day 49", text: "The universe conspires in favor of the brave." },
    { title: "Day 50", text: "Your name is written in the Book of Becoming." },
    { title: "Day 51", text: "Grasp the lightning and call it your own." },
    { title: "Day 52", text: "Fear is a liar with a very loud voice." },
    { title: "Day 53", text: "You are the masterpiece and the sculptor too." },
    { title: "Day 54", text: "Great things take time, like oaks and empires." },
    { title: "Day 55", text: "Don't dim your light to suit a dark room." },
    { title: "Day 56", text: "The desert blooms for those who wait for rain." },
    { title: "Day 57", text: "Your vision is a seed that demands to grow." },
    { title: "Day 58", text: "Walk as if the earth belongs beneath your feet." },
    { title: "Day 59", text: "Failure is just a lesson wearing a disguise." },
    { title: "Day 60", text: "The only limit is the one you draw yourself." },
    { title: "Day 61", text: "Sing your song even if the birds aren't listening." },
    { title: "Day 62", text: "You are more than the sum of your mistakes." },
    { title: "Day 63", text: "Strength is found in the quietest of moments." },
    { title: "Day 64", text: "Reach for the stars; even a miss lands high." },
    { title: "Day 65", text: "The world needs the gift only you can give." },
    { title: "Day 66", text: "Burn so bright they can’t look away." },
    { title: "Day 67", text: "Your spirit is a wild thing, untamed and free." },
    { title: "Day 68", text: "Every step forward is a victory in itself." },
    { title: "Day 69", text: "Don't let the whispers of the small stop you." },
    { title: "Day 70", text: "You have the power to change the narrative." },
    { title: "Day 71", text: "Hope is a candle that never truly flickers out." },
    { title: "Day 72", text: "Build your bridge as you walk across the void." },
    { title: "Day 73", text: "The sun sets only to prove it can rise again." },
    { title: "Day 74", text: "Your heart is a drum beating for the future." },
    { title: "Day 75", text: "Life is a canvas; throw the paint with joy." },
    { title: "Day 76", text: "Discipline is the highest form of self-love." },
    { title: "Day 77", text: "You are a miracle in a suit of skin and bone." },
    { title: "Day 78", text: "The heaviest weights build the strongest wings." },
    { title: "Day 79", text: "Leave a trail of light wherever you go." },
    { title: "Day 80", text: "Your dreams are valid, no matter how quiet." },
    { title: "Day 81", text: "Chase the things that set your soul on fire." },
    { title: "Day 82", text: "The night is just a womb for the coming day." },
    { title: "Day 83", text: "You are resilient, like grass through concrete." },
    { title: "Day 84", text: "Faith is the bird that feels the light at dawn." },
    { title: "Day 85", text: "Your journey is unique; do not compare paths." },
    { title: "Day 86", text: "Stand tall, for you are a child of the cosmos." },
    { title: "Day 87", text: "Every breath is a chance to start again." },
    { title: "Day 88", text: "The peak is near for those who keep climbing." },
    { title: "Day 89", text: "You are the answer to a thousand ancestors' prayers." },
    { title: "Day 90", text: "Shine from within, and the way will be clear." },
    { title: "Day 91", text: "Life is a dance, and you have the rhythm." },
    { title: "Day 92", text: "Be the change that you wish to witness." },
    { title: "Day 93", text: "Your mind is a kingdom; rule it with peace." },
    { title: "Day 94", text: "The struggle is the soil of your expansion." },
    { title: "Day 95", text: "You are destined for more than just existing." },
    { title: "Day 96", text: "Trust the process, even when it feels slow." },
    { title: "Day 97", text: "Your voice has the power to move mountains." },
    { title: "Day 98", text: "Radiate love, and it will return to you tenfold." },
    { title: "Day 99", text: "You are a warrior of light in a chaotic world." },
    { title: "Day 100", text: "Believe in yourself as much as I believe in you." },
    { title: "Day 101", text: "Write your legacy in the ink of your actions." },
    { title: "Day 102", text: "The mirror shows a face; the soul shows a star." },
    { title: "Day 103", text: "Do not be afraid to be the 'too much' version." },
    { title: "Day 104", text: "Gravity is just a suggestion to those who fly." },
    { title: "Day 105", text: "Your internal weather is yours to command." },
    { title: "Day 106", text: "A diamond is just coal that survived the pressure." },
    { title: "Day 107", text: "The loudest roar is the one of silent conviction." },
    { title: "Day 108", text: "Plant trees under which you may never sit." },
    { title: "Day 109", text: "Your kindness is a revolution in a cruel world." },
    { title: "Day 110", text: "The cage is open; you only have to look up." },
    { title: "Day 111", text: "Small wins are the bricks of a great life." },
    { title: "Day 112", text: "Let go of what was to grasp what will be." },
    { title: "Day 113", text: "You are a symphony composed of stardust." },
    { title: "Day 114", text: "The anchor is up; it’s time to sail the deep." },
    { title: "Day 115", text: "Wisdom is the fruit of pain well-tended." },
    { title: "Day 116", text: "Your energy is your most sacred resource." },
    { title: "Day 117", text: "Be the person you needed when you were young." },
    { title: "Day 118", text: "The universe loves a mind that is certain." },
    { title: "Day 119", text: "Rest is not defeat; it is a sacred refueling." },
    { title: "Day 120", text: "Your eyes hold the fire of a thousand suns." },
    { title: "Day 121", text: "Every 'not yet' is a 'not this way' in disguise." },
    { title: "Day 122", text: "Break the chains of who they said you were." },
    { title: "Day 123", text: "You are the captain of this shifting vessel." },
    { title: "Day 124", text: "Turn your wounds into windows of insight." },
    { title: "Day 125", text: "The forest is beautiful because it is diverse." },
    { title: "Day 126", text: "Hold your head high; your crown is invisible." },
    { title: "Day 127", text: "The clock is ticking, but the soul is timeless." },
    { title: "Day 128", text: "Beauty is found in the courage to be real." },
    { title: "Day 129", text: "You are a bridge between the earth and sky." },
    { title: "Day 130", text: "Never apologize for the space you occupy." },
    { title: "Day 131", text: "Your intuition is a whisper from the divine." },
    { title: "Day 132", text: "Growth is often a series of tiny, quiet deaths." },
    { title: "Day 133", text: "The view from the top requires the climb." },
    { title: "Day 134", text: "Be a lighthouse for those lost in the fog." },
    { title: "Day 135", text: "Your vibration dictates the world you see." },
    { title: "Day 136", text: "Hunger for wisdom like a dying man for air." },
    { title: "Day 137", text: "You are the architect of your own joy." },
    { title: "Day 138", text: "The past is a library; visit it, don't live there." },
    { title: "Day 139", text: "Your potential is a well that never runs dry." },
    { title: "Day 140", text: "Courage doesn’t always roar; it persists." },
    { title: "Day 141", text: "You are the master of your own fate." },
    { title: "Day 142", text: "The stars are jealous of the fire in your heart." },
    { title: "Day 143", text: "Every day is a canvas; don’t paint it gray." },
    { title: "Day 144", text: "You are a force of nature, untamed and true." },
    { title: "Day 145", text: "The seed doesn’t know it’s becoming a flower." },
    { title: "Day 146", text: "Believe in the magic that lives in your hands." },
    { title: "Day 147", text: "Your life is a song only you can sing." },
    { title: "Day 148", text: "The dark is only the absence of your focus." },
    { title: "Day 149", text: "You are a miracle in progress, every single day." },
    { title: "Day 150", text: "Rise like the tide, inevitable and strong." },
    { title: "Day 151", text: "Your purpose is the North Star of your life." },
    { title: "Day 152", text: "Don’t wait for the storm to pass; learn to dance." },
    { title: "Day 153", text: "You are the light that the world is waiting for." },
    { title: "Day 154", text: "Every setback is a setup for a comeback." },
    { title: "Day 155", text: "Your heart is a compass that always knows home." },
    { title: "Day 156", text: "The only way out is through the center." },
    { title: "Day 157", text: "You are a masterpiece in a world of copies." },
    { title: "Day 158", text: "Trust the timing of your unfolding life." },
    { title: "Day 159", text: "Your presence is a gift to the entire world." },
    { title: "Day 160", text: "Be bold, be brave, be unapologetically you." },
    { title: "Day 161", text: "The world is yours to explore and create." },
    { title: "Day 162", text: "Your soul is a garden; water it with love." },
    { title: "Day 163", text: "Every morning is a new beginning, a new chance." },
    { title: "Day 164", text: "You are stronger than you think, braver than you know." },
    { title: "Day 165", text: "The power to change is within your grasp." },
    { title: "Day 166", text: "Your dreams are the blueprints of your reality." },
    { title: "Day 167", text: "Shine on, you crazy and beautiful diamond." },
    { title: "Day 168", text: "The universe is cheering for your every success." },
    { title: "Day 169", text: "You are a beacon of hope in a weary world." },
    { title: "Day 170", text: "Your light can never be extinguished by the dark." },
    { title: "Day 171", text: "Every step you take is a move toward greatness." },
    { title: "Day 172", text: "You are the author of your own incredible story." },
    { title: "Day 173", text: "The sky is not the limit; it’s just the beginning." },
    { title: "Day 174", text: "Your heart is a temple; treat it with reverence." },
    { title: "Day 175", text: "You are a cosmic dancer in the halls of time." },
    { title: "Day 176", text: "Believe in the impossible, and it becomes possible." },
    { title: "Day 177", text: "Your spirit is an eternal flame that burns bright." },
    { title: "Day 178", text: "Every moment is an opportunity for transformation." },
    { title: "Day 179", text: "You are a vessel of love and infinite light." },
    { title: "Day 180", text: "The world is a better place because you are in it." },
    { title: "Day 181", text: "Your courage is a flame that lights the way." },
    { title: "Day 182", text: "You are the dreamer and the dream itself." },
    { title: "Day 183", text: "Every challenge is an invitation to grow." },
    { title: "Day 184", text: "Your soul is a star that never stops shining." },
    { title: "Day 185", text: "The universe is a mirror of your inner state." },
    { title: "Day 186", text: "You are a creator of worlds and of destiny." },
    { title: "Day 187", text: "Your life is a precious gift; cherish every breath." },
    { title: "Day 188", text: "Believe in the beauty of your own soul." },
    { title: "Day 189", text: "You are a radiant being of light and love." },
    { title: "Day 190", text: "The power of the universe flows through you." },
    { title: "Day 191", text: "Your heart is a gateway to the infinite." },
    { title: "Day 192", text: "You are a masterpiece of divine proportions." },
    { title: "Day 193", text: "Every day is a chance to shine even brighter." },
    { title: "Day 194", text: "Your soul is a melody that the world needs." },
    { title: "Day 195", text: "You are a child of the universe, born to shine." },
    { title: "Day 196", text: "The world is waiting for your unique light." },
    { title: "Day 197", text: "Your journey is a sacred path to your self." },
    { title: "Day 198", text: "Believe in your power to create a better world." },
    { title: "Day 199", text: "You are a beacon of truth and inner wisdom." },
    { title: "Day 200", text: "Your light is a blessing to all who see it." },
    { title: "Day 201", text: "The iron is hot; strike for your future." },
    { title: "Day 202", text: "Soft words can break hard hearts; use them." },
    { title: "Day 203", text: "You are the rain that ends the drought." },
    { title: "Day 204", text: "No star is too far for a soul that can fly." },
    { title: "Day 205", text: "The mountains are calling your name in echoes." },
    { title: "Day 206", text: "Your stillness is where the answers reside." },
    { title: "Day 207", text: "Don't be a shadow of someone else’s light." },
    { title: "Day 208", text: "The ocean doesn’t envy the river; it waits." },
    { title: "Day 209", text: "Your breath is the wind in your own sails." },
    { title: "Day 210", text: "Be the hero you used to read about." },
    { title: "Day 211", text: "Failure is a bruise, not a broken bone." },
    { title: "Day 212", text: "The dawn is a reward for surviving the night." },
    { title: "Day 213", text: "Your hands hold the tools to build a world." },
    { title: "Day 214", text: "Authenticity is the only path to real freedom." },
    { title: "Day 215", text: "You are the fire that the cold world seeks." },
    { title: "Day 216", text: "A single candle can end a thousand years of dark." },
    { title: "Day 217", text: "Your mind is the most powerful engine on earth." },
    { title: "Day 218", text: "Let your actions be your most eloquent poem." },
    { title: "Day 219", text: "The desert is wide, but your well is deep." },
    { title: "Day 220", text: "You are the lightning before the thunder rolls." },
    { title: "Day 221", text: "Every scar is a medal of honor you wear." },
    { title: "Day 222", text: "The world is a book; don’t stay on one page." },
    { title: "Day 223", text: "Your smile is a bridge over a river of tears." },
    { title: "Day 224", text: "Don't fear the void; it is where stars are born." },
    { title: "Day 225", text: "You are the gardener of your own destiny." },
    { title: "Day 226", text: "The roots are hidden, but the fruit is seen." },
    { title: "Day 227", text: "Silence the critic with the sound of your work." },
    { title: "Day 228", text: "You are a masterpiece that is never quite finished." },
    { title: "Day 229", text: "The sky is blue because it has nothing to hide." },
    { title: "Day 230", text: "Your heart is a drum that keeps the world’s time." },
    { title: "Day 231", text: "The soul knows the way when the eyes are shut." },
    { title: "Day 232", text: "You are the architect of the bridge to tomorrow." },
    { title: "Day 233", text: "A thousand miles begins with a single heartbeat." },
    { title: "Day 234", text: "Let your soul be as vast as the summer sky." },
    { title: "Day 235", text: "You are the medicine the world didn't know it needed." },
    { title: "Day 236", text: "The eagle flies highest when the wind is against it." },
    { title: "Day 237", text: "Your potential is a mountain with no visible peak." },
    { title: "Day 238", text: "Every sunset is a 'well done' from the universe." },
    { title: "Day 239", text: "You are the artist; the day is your wet clay." },
    { title: "Day 240", text: "The stars are just holes in the floor of heaven." },
    { title: "Day 241", text: "Your courage is a lighthouse on a rocky shore." },
    { title: "Day 242", text: "Don't look back; you aren't going that way." },
    { title: "Day 243", text: "You are a warrior of peace in a time of noise." },
    { title: "Day 244", text: "The smallest act of love is a cosmic event." },
    { title: "Day 245", text: "Your life is a flame that refuses to flicker." },
    { title: "Day 246", text: "The world is a mirror; smile and it smiles back." },
    { title: "Day 247", text: "You are the composer of your own inner silence." },
    { title: "Day 248", text: "The road is long, but the company is divine." },
    { title: "Day 249", text: "Your soul is a diamond; the world is the grit." },
    { title: "Day 250", text: "Be the reason someone believes in magic again." },
    { title: "Day 251", text: "The harvest is coming for the seeds you’ve sown." },
    { title: "Day 252", text: "You are the anchor in the middle of the gale." },
    { title: "Day 253", text: "The moon doesn't need to be full to be beautiful." },
    { title: "Day 254", text: "Your spirit is a bird that belongs to the sky." },
    { title: "Day 255", text: "The fire inside you is hotter than the fire outside." },
    { title: "Day 256", text: "You are the captain of the ship named 'Now'." },
    { title: "Day 257", text: "The universe is a song; find your harmony." },
    { title: "Day 258", text: "Your words have the weight of a thousand stones." },
    { title: "Day 259", text: "The truth is a compass that never points wrong." },
    { title: "Day 260", text: "You are the gold at the end of the journey." },
    { title: "Day 261", text: "The night is a blanket for the weary dreamer." },
    { title: "Day 262", text: "Your light is a beacon for the lost and lonely." },
    { title: "Day 263", text: "The world is a garden; be the most vibrant bloom." },
    { title: "Day 264", text: "Your soul is a river that flows to the sea." },
    { title: "Day 265", text: "The mountain is tall, but you are taller still." },
    { title: "Day 266", text: "You are the light that dances on the water." },
    { title: "Day 267", text: "The universe is a canvas; paint your own reality." },
    { title: "Day 268", text: "Your heart is a sanctuary of peace and love." },
    { title: "Day 269", text: "The world is a stage; play your part with grace." },
    { title: "Day 270", text: "Your soul is a star that shines in the dark." },
    { title: "Day 271", text: "The road to success is paved with persistence." },
    { title: "Day 272", text: "Your soul master of your own inner peace." },
    { title: "Day 273", text: "The universe is a symphony of light and sound." },
    { title: "Day 274", text: "Your life is a journey to the center of your soul." },
    { title: "Day 275", text: "The world is a playground for the brave and bold." },
    { title: "Day 276", text: "Your soul is a flame that warms the world." },
    { title: "Day 277", text: "The stars are the jewelry of the night sky." },
    { title: "Day 278", text: "You are the light that illuminates the way." },
    { title: "Day 279", text: "The universe is a mystery; enjoy the discovery." },
    { title: "Day 280", text: "Your heart is a treasure chest of infinite love." },
    { title: "Day 281", text: "The world is a classroom; learn every lesson." },
    { title: "Day 282", text: "Your soul is a bird that flies on the wind of hope." },
    { title: "Day 283", text: "The road is your teacher; walk it with an open mind." },
    { title: "Day 284", text: "You are the captain of your own destiny's ship." },
    { title: "Day 285", text: "The universe is a dance; find your own rhythm." },
    { title: "Day 286", text: "Your life is a masterpiece in the making." },
    { title: "Day 287", text: "The world is a reflection of your own inner light." },
    { title: "Day 288", text: "Your soul is a star that never stops burning." },
    { title: "Day 289", text: "The road to greatness is found within yourself." },
    { title: "Day 290", text: "You are the architect of your own happiness." },
    { title: "Day 291", text: "The universe is a garden; nurture your dreams." },
    { title: "Day 292", text: "Your heart is a compass that leads to the truth." },
    { title: "Day 293", text: "The world is a song; sing it with all your heart." },
    { title: "Day 294", text: "Your soul is a beacon of hope and inspiration." },
    { title: "Day 295", text: "The road is a path to your own inner strength." },
    { title: "Day 296", text: "You are the light that guides the way home." },
    { title: "Day 297", text: "The universe is a mirror of your own divinity." },
    { title: "Day 298", text: "Your life is a gift to the entire world." },
    { title: "Day 299", text: "The world is a better place because you are here." },
    { title: "Day 300", text: "Your soul is a star that shines for all eternity." },
    { title: "Day 301", text: "Legacy is built in the quiet, mundane hours." },
    { title: "Day 302", text: "You are the answer to a question yet unasked." },
    { title: "Day 303", text: "The universe has a rhythm; find your pulse." },
    { title: "Day 304", text: "Greatness is a series of small, honest acts." },
    { title: "Day 305", text: "You are the ink, the pen, and the poet." },
    { title: "Day 306", text: "Don't count the days; make the days count you." },
    { title: "Day 307", text: "Your spirit is a flame that the wind only fans." },
    { title: "Day 308", text: "The heaviest crown is the one you refuse to wear." },
    { title: "Day 309", text: "You are the summit of your own personal climb." },
    { title: "Day 310", text: "Hope is the only thing stronger than fear." },
    { title: "Day 311", text: "Your light is a bridge between two worlds." },
    { title: "Day 312", text: "The soul is a mirror that never gathers dust." },
    { title: "Day 313", text: "You are the melody in a world of static noise." },
    { title: "Day 314", text: "Be the person your younger self would admire." },
    { title: "Day 315", text: "The stars are watching your progress with pride." },
    { title: "Day 316", text: "Your heart is an engine that runs on courage." },
    { title: "Day 317", text: "The world is waiting for your specific roar." },
    { title: "Day 318", text: "You are the master of the art of beginning." },
    { title: "Day 319", text: "The horizon is just a line for those who fear." },
    { title: "Day 320", text: "Your life is a torch that lights up the dark." },
    { title: "Day 321", text: "The only failure is the refusal to try again." },
    { title: "Day 322", text: "You are the weaver of your own golden thread." },
    { title: "Day 323", text: "The sky is the floor for your highest dreams." },
    { title: "Day 324", text: "Your silence is a power that moves the deep." },
    { title: "Day 325", text: "Be the sun for someone who has forgotten dawn." },
    { title: "Day 326", text: "You are the truth in a world full of shadows." },
    { title: "Day 327", text: "The path of the brave is paved with light." },
    { title: "Day 328", text: "Your soul is a star that refuses to fade." },
    { title: "Day 329", text: "The world is a stage, and you are the star." },
    { title: "Day 330", text: "You are the captain of your own inner sea." },
    { title: "Day 331", text: "The universe is a song, and you are the lead." },
    { title: "Day 332", text: "Your heart is a beacon that shines for all." },
    { title: "Day 333", text: "The world is a garden, and you are the sun." },
    { title: "Day 334", text: "You are the light that guides the way through." },
    { title: "Day 335", text: "The universe is a mirror of your own brilliance." },
    { title: "Day 336", text: "Your life is a journey to the heart of love." },
    { title: "Day 337", text: "The world is a canvas, and you are the artist." },
    { title: "Day 338", text: "You are the melody that the world needs now." },
    { title: "Day 339", text: "The universe is a dance, and you are the lead." },
    { title: "Day 340", text: "Your heart is a sanctuary of peace and joy." },
    { title: "Day 341", text: "The world is a better place with you in it." },
    { title: "Day 342", text: "You are the soul of the world's own light." },
    { title: "Day 343", text: "The universe is a symphony of infinite love." },
    { title: "Day 344", text: "Your life is a masterpiece of divine light." },
    { title: "Day 345", text: "The world is a playground for your spirit." },
    { title: "Day 346", text: "You are the light that shines in the darkness." },
    { title: "Day 347", text: "The universe is a witness to your greatness." },
    { title: "Day 348", text: "Your heart is a vessel of infinite peace." },
    { title: "Day 349", text: "The world is a reflection of your inner beauty." },
    { title: "Day 350", text: "You are the star of your own cosmic show." },
    { title: "Day 351", text: "The universe is a celebration of your life." },
    { title: "Day 352", text: "Your soul is a beacon of hope and love." },
    { title: "Day 353", text: "The world is a journey to your own truth." },
    { title: "Day 354", text: "You are the light that guides the world home." },
    { title: "Day 355", text: "The universe is a mirror of your divinity." },
    { title: "Day 356", text: "Your heart is a gateway to the infinite." },
    { title: "Day 357", text: "The world is a song that you sing so well." },
    { title: "Day 358", text: "You are the master of your own destiny." },
    { title: "Day 359", text: "The universe is a garden of infinite joy." },
    { title: "Day 360", text: "Your soul is a flame that will never go out." },
    { title: "Day 361", text: "The world is a better place because of you." },
    { title: "Day 362", text: "You are the light of a thousand suns." },
    { title: "Day 363", text: "The universe is a dance of eternal love." },
    { title: "Day 364", text: "Your life is a gift that keeps on giving." },
    { title: "Day 365", text: "Today is the day you become everything you are." }
];

function setup() {
    const savedName = localStorage.getItem('glimmer_name');
    if (!savedName) {
        document.getElementById('welcome-overlay').style.display = 'flex';
    } else {
        document.getElementById('welcome-overlay').style.display = 'none';
        initDashboard(savedName);
    }
}

function firstTimeSave() {
    const val = document.getElementById('initial-name').value.trim();
    if (val) {
        localStorage.setItem('glimmer_name', val);
        const overlay = document.getElementById('welcome-overlay');
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
            initDashboard(val);
        }, 800);
    }
}

function initDashboard(name) {
    document.getElementById('user-name-input').value = name;
    
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    const todayIndex = (dayOfYear - 1) % quotes.length;
    const today = quotes[todayIndex];

    // Smart Greeting Logic
    const hour = now.getHours();
    let greet = "";
    if (hour >= 5 && hour < 12) greet = "Good Morning";
    else if (hour >= 12 && hour < 15) greet = "Good Noon";
    else if (hour >= 15 && hour < 17) greet = "Good Afternoon";
    else if (hour >= 17 && hour < 20) greet = "Good Evening";
    else greet = "Good Night";

    document.getElementById('greet-text').innerText = `${greet}, ${name}`;
    document.getElementById('day-id').innerText = today.title;
    document.getElementById('quote-display').innerText = `"${today.text}"`;

    updateUI(todayIndex);
}

function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

function saveName() {
    const val = document.getElementById('user-name-input').value.trim();
    if (val) {
        localStorage.setItem('glimmer_name', val);
        location.reload(); 
    }
}

function handleLike() {
    let favs = JSON.parse(localStorage.getItem('glimmer_favs')) || [];
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    const currentIndex = (dayOfYear - 1) % quotes.length;
    const today = quotes[currentIndex];
    
    const idx = favs.findIndex(q => q.text === today.text);
    if (idx > -1) favs.splice(idx, 1);
    else favs.push(today);

    localStorage.setItem('glimmer_favs', JSON.stringify(favs));
    updateUI(currentIndex);
}

function updateUI(currentIndex) {
    const favs = JSON.parse(localStorage.getItem('glimmer_favs')) || [];
    const isLiked = favs.some(q => q.text === quotes[currentIndex].text);
    document.getElementById('heart-btn').innerText = isLiked ? '♥' : '♡';
    
    const listDiv = document.getElementById('fav-list');
    listDiv.innerHTML = favs.length === 0 ? 
        "<p style='color:#444; font-size:0.8rem;'>Empty vault.</p>" : 
        favs.map(q => `<div class="fav-item"><small>${q.title}</small><p>${q.text}</p></div>`).join('');
}

function clearFavs() {
    if (confirm("Clear favorites?")) {
        localStorage.removeItem('glimmer_favs');
        location.reload();
    }
}

window.onload = setup;