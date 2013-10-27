class AddSongController < ApplicationController
  def showAddSongForm
    @tune = Tune.new
  end

  def addSong
    @tune =  Tune.new(params[:tune])
    if @tune.save!
      @error = "There are no available doctors for your input"
      redirect_to  mono_path
    else
      @error = "There are no available offices for your input"
      redirect_to barro_path
    end
  end

  def upload
  uploaded_io = params[:person][:picture]
  File.open(Rails.root.join('public', 'uploads', uploaded_io.original_filename), 'w') do |file|
    file.write(uploaded_io.read)
  end
end

end
