./backend/bin/console doctrine:migrations:migrate --no-interaction
./backend/bin/console cache:clear --no-interaction
./backend/bin/console cache:warmup --no-interaction
