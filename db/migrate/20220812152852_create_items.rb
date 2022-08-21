class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :item_name
      t.decimal :price
      t.string :description
      t.boolean :in_stock
      t.integer :designer_id

      t.timestamps
    end
  end
end
