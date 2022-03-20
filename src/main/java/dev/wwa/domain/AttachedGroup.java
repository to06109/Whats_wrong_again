package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.*;

@Entity
@Getter @Setter
public class AttachedGroup {

    @Id @GeneratedValue
    @Column(name = "attached_group_id")
    private Long id;

    @OneToOne(mappedBy = "attached_group", fetch = LAZY)
    private Posts post;

    @OneToMany
    @JoinColumn(name = "attached_group")
    private List<Attached> attached = new ArrayList<>();

    @NotNull
    private String attached_path;

}
