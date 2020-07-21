User.destroy_all
Slot.destroy_all
Meal.destroy_all
user1 = User.create(username: 'polarbearpete7', password: 'password11111111', email: 'example@something.com')
user2 = User.create(username: 'keanu7reeves', password: 'password222222222', email: 'otherexample@something.com')
user3 = User.create(username: 'toastmaster500', password: 'password33333333', email: 'anotherexample@something.com')
slot1 = Slot.create(meal_slot: 'breakfast')
slot2 = Slot.create(meal_slot: 'lunch')
slot3 = Slot.create(meal_slot: 'dinner')
slot4 = Slot.create(meal_slot: 'snack')
meal = Meal.create({user: user1, slot: slot1, foodeaten: 'hobo sandwich'})
meal = Meal.create({user: user2, slot: slot2, foodeaten: 'ommlette'})
meal = Meal.create({user: user3, slot: slot3, foodeaten: 'bagel and butter'})
meal = Meal.create({user: user1, slot: slot4, foodeaten: 'steak'})
meal = Meal.create({user: user2, slot: slot1, foodeaten: 'beer pretzil'})
meal = Meal.create({user: user3, slot: slot2, foodeaten: 'nuts'})
meal = Meal.create({user: user1, slot: slot3, foodeaten: 'ham n cheese'})
meal = Meal.create({user: user2, slot: slot4, foodeaten: 'sword fish'})
meal = Meal.create({user: user3, slot: slot1, foodeaten: 'salmon'})