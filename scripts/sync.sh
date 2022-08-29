
sync() { 
  IFS=',' read -r -a apks <<< "$apks"
  for element in "${apks[@]}"
  do
      mkdir -p ./temp/$element/
      rsync -a $go_path/src/$element/ ./temp/$element/
      echo $element" done"
  done
}
