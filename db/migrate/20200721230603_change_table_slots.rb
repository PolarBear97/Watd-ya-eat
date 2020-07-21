class ChangeTableSlots < ActiveRecord::Migration[6.0]
  def change
    change_table :slots do |t|
      t.remove :lunch, :dinner, :snack 
      t.rename :breakfast, :meal_slot
    end
  end
end
