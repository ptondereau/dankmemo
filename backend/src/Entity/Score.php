<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(attributes={"order"={"elapsedTime": "ASC"}})
 * @ORM\Entity(repositoryClass="App\Repository\ScoreRepository")
 */
class Score
{
    /**
     * @ORM\Id
     * @ORM\Column(type="uuid", unique=true)
     * @ORM\GeneratedValue(strategy="CUSTOM")
     * @ORM\CustomIdGenerator(class="Ramsey\Uuid\Doctrine\UuidGenerator")
     */
    private ?UuidInterface $id;

    /**
     * @ORM\Column(name="author", type="string")
     * @Assert\NotBlank
     */
    public string $author = '';

    /**
     * @ORM\Column(name="elapsed_time", type="bigint")
     * @Assert\NotNull()
     */
    public int $elapsedTime = 0;


    public function getId(): ?UuidInterface
    {
        return $this->id;
    }

    public function getAuthor(): string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getElapsedTime(): int
    {
        return $this->elapsedTime;
    }

    public function setElapsedTime(int $elapsedTime): self
    {
        $this->elapsedTime = $elapsedTime;

        return $this;
    }

}
