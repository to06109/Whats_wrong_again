package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.*;

@Entity
@Getter @Setter
public class Debate {

    @Id @GeneratedValue
    @Column(name = "debate_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "post_id")
    @NotNull
    private Posts post;

    @NotNull
    private Long debate_no;

    @NotNull
    private Long editor_id;

    @NotNull
    private LocalDateTime edit_date;

    @NotNull
    private String title;

    private String contents;

    @NotNull
    private Boolean status;

    @OneToMany
    @JoinColumn(name = "debate")
    private List<Debate> debates = new ArrayList<>();

}
