cd ./backend
bin/console doctrine:migrations:migrate --no-interaction
bin/console cache:clear --no-interaction
bin/console cache:warmup --no-interaction
