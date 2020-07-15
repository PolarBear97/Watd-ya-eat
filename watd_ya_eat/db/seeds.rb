


User.create(username: 'polarbearpete7', password_digest: 'password1', email: 'example@something.com')
User.create(username: 'keanu7reeves', password_digest: 'password22', email: 'otherexample@something.com')
User.create(username: 'toastmaster500', password_digest: 'password333', email: 'anotherexample@something.com')
Slot.create(meal_slot: 'breakfast')
Slot.create(meal_slot: 'lunch')
Slot.create(meal_slot: 'dinner')
Slot.create(meal_slot: 'snack')
Meal.create({user_id: '7', slot_id: '9', foodeaten: 'hobo sandwich'})
Meal.create({user_id: '8', slot_id: '9', foodeaten: 'ommlette'})
Meal.create({user_id: '9', slot_id: '9', foodeaten: 'bagel and butter'})
Meal.create({user_id: '7', slot_id: '10', foodeaten: 'steak'})
Meal.create({user_id: '8', slot_id: '10', foodeaten: 'beer pretzil'})
Meal.create({user_id: '9', slot_id: '10', foodeaten: 'nuts'})
Meal.create({user_id: '7', slot_id: '11', foodeaten: 'ham n cheese'})
Meal.create({user_id: '8', slot_id: '11', foodeaten: 'sword fish'})
Meal.create({user_id: '9', slot_id: '11', foodeaten: 'salmon'})