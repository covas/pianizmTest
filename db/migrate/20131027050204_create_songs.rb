class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :image

      t.timestamps
    end
  end
end
