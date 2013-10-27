class CreateTunes < ActiveRecord::Migration
  def change
    create_table :tunes do |t|
      t.string :image
      t.string :tags
      t.string :views
      t.string :category
      t.integer :level
      t.integer :quality
      t.string :author
      t.string :info
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
