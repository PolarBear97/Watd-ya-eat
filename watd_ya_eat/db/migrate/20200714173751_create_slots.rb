class CreateSlots < ActiveRecord::Migration[6.0]
  def change
    create_table :slots do |t|
      t.string :breakfast
      t.string :lunch
      t.string :dinner
      t.string :snack

      t.timestamps
    end
  end
end
