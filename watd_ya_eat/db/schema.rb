ActiveRecord::Schema.define(version: 2020_07_14_233938) do

  enable_extension "plpgsql"

  create_table "meals", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "slot_id", null: false
    t.string "foodeaten"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["slot_id"], name: "index_meals_on_slot_id"
    t.index ["user_id"], name: "index_meals_on_user_id"
  end

  create_table "slots", force: :cascade do |t|
    t.string "meal_slot"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "meals", "slots"
  add_foreign_key "meals", "users"
end
