package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import static javax.persistence.FetchType.*;

@Entity
@Getter @Setter
public class Category {

    @Id @GeneratedValue
    @Column(name = "category_id")
    private Long id;

    @OneToOne(mappedBy = "category", fetch = LAZY)
    private Posts post;

    @NotNull
    private Boolean error;

    @NotNull
    private Boolean solution;

    @NotNull
    private Boolean user_request;

}
